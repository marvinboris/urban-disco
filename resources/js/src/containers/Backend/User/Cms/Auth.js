import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import { getCms, patchCms, resetCms } from '../../../../store/actions/backend/cms';
import { updateObject } from '../../../../shared/utility';
import AUTH from '../../../../components/Content/Auth';

const icon = "wrench";

const Languages = ({ auth, language }) => {
    const [activeTab, setActiveTab] = useState(language.abbr + '-footer');
    const [value, setValue] = useState(auth);

    const inputChangeHandler = e => {
        const { value } = e.target;
        if (value !== activeTab) setActiveTab(value);
    }

    const onChange = (e, ...deepness) => {
        const valueCopy = { ...value };

        if (deepness.length === 1) {
            valueCopy[deepness[0]] = e.target.value;
            return setValue(valueCopy);
        }

        const subValues = [];
        let subValue = { ...value };
        for (let i = 0; i < deepness.length - 1; i++) {
            const element = deepness[i];
            subValue = subValue[element];
            subValues.push(subValue);
        }
        subValues[subValues.length - 1][deepness[deepness.length - 1]] = e.target.value;
        for (let i = 1; i < deepness.length - 1; i++) {
            const element = deepness[deepness.length - 1 - i];
            const index = subValues.length - 1 - i;
            subValues[index][element] = subValues[index + 1];
        }
        valueCopy[deepness[0]] = subValues[0];

        setValue(valueCopy);
    }

    const recursiveDeepness = (paramItem, paramName, paramValue, paramDeepness, paramPrepends = [], paramAppends = []) => Object.keys(paramItem).map(item => {
        const mainItem = paramItem[item];
        const mainName = `${paramName}[${item}]`;
        const mainId = `${paramName}-${item}`;
        const mainValue = paramValue[item];
        const mainDeepness = paramDeepness.concat(item);

        let prepend;
        const findPrepend = paramPrepends.find(el => (new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]'))).test(mainName));
        prepend = !findPrepend ? null : findPrepend.action(mainItem);

        let append;
        const findAppend = paramAppends.find(el => (new RegExp(el.regex.replace(/\[/g, '\\[').replace(/\]/g, '\\]'))).test(mainName));
        append = !findAppend ? null : findAppend.action(mainItem);

        return typeof mainItem === 'string' ? <Fragment key={language.abbr + '-' + mainId}>
            {prepend}
            <FormGroup className="col-md-6 col-lg-4 align-self-end">
                <Label className="text-small text-500">{mainItem}</Label>
                <Input type="textarea" name={mainName} id={mainId} placeholder={mainItem} onChange={e => onChange(e, ...mainDeepness)} value={mainValue} />
            </FormGroup>
            {append}
        </Fragment> : recursiveDeepness(mainItem, mainName, mainValue, mainDeepness, paramPrepends, paramAppends);
    });



    const options = Object.keys(auth).sort((a, b) => a.localeCompare(b)).map(key => {
        const id = `${language.abbr}-${key}`;

        return <option key={id} className="text-capitalize" value={id}>{key.split('_').join(' ')}</option>;
    });

    const prefix = `${language.abbr}[auth]`;

    const adminItem = AUTH['admin'];
    const adminName = `${prefix}[admin]`;
    const adminValue = value['admin'];
    const adminDeepness = ['admin'];
    const admin = recursiveDeepness(adminItem, adminName, adminValue, adminDeepness, [
        { regex: `${prefix}[admin][login][sign_in_to]`, action: () => <Col xs={12}><h4>Login</h4></Col> },
        { regex: `${prefix}[admin][verify][enter]`, action: () => <Col xs={12}><h4>Verify</h4></Col> },
    ]);

    const keys = Object.keys(AUTH).filter(key => !['admin'].includes(key));
    const resourceTabPanes = keys.map(item => {
        const currentItem = AUTH[item];
        const currentName = `${prefix}[${item}]`;
        const currentValue = value[item];
        const currentDeepness = [item];
        const current = recursiveDeepness(currentItem, currentName, currentValue, currentDeepness);

        const id = language.abbr + "-" + item;

        return <Row key={language.abbr + '-' + currentName} className={`pt-4 ${(activeTab === id) ? "" : "d-none"}`}>{current}</Row>;
    });

    return <Row key={'Languages-' + language.abbr}>
        <div className="col-md-6 col-xl-4 col-xxl-3">
            <FormGroup>
                <Input type="select" name="tab" onChange={inputChangeHandler} className="text-capitalize" value={activeTab}>
                    {options}
                </Input>
            </FormGroup>
        </div>

        <div className="col-12">
            <Row className={`pt-4 ${(activeTab === (language.abbr + '-admin')) ? "" : "d-none"}`}>
                {admin}
            </Row>

            {resourceTabPanes}
        </div>
    </Row>;
};

class Auth extends Component {
    state = {
        abbr: process.env.MIX_DEFAULT_LANG
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { auth } } } } = nextProps;
            return updateObject(prevState, { ...auth });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { cms: { title, auth } } } }
                }
            },
            backend: { cms: { loading, error, message, cms, languages } },
            auth: { data: { role: { features } } }
        } = this.props;
        const { abbr } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'cms');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('u')) && <Redirect to="/user/dashboard" />;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;

            if (!languages) languages = [];
            const languagesOptions = languages.map(language => <option key={Math.random() + JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

            const mainContent = languages.map(language => <div key={Math.random()} className={language.abbr === abbr ? "" : "d-none"}>
                <Languages auth={cms.pages[language.abbr].auth} language={language} />
            </div>);

            content = <Col lg={9}>
                <Feedback message={message} />
                <Row>
                    <input type="hidden" name="_method" defaultValue="PATCH" />

                    <div className="col-md-6 col-xl-4 col-xxl-3">
                        <FormGroup>
                            <Input type="select" name="abbr" onChange={this.inputChangeHandler} value={abbr}>
                                {languagesOptions}
                            </Input>
                        </FormGroup>
                    </div>

                    <div className="col-12">{mainContent}</div>

                    <div className="col-12">
                        <FormButton color="green" icon="save">{save}</FormButton>
                    </div>
                </Row>
            </Col>;
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={auth} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{auth}</Subtitle>
                </TitleWrapper>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={icon} title={auth} link="/admin/cms" innerClassName="row justify-content-center">
                            {content}
                        </Form>
                    </Row>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getCms()),
    patch: data => dispatch(patchCms('auth', data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));