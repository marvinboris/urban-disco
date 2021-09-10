import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';

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
import MESSAGES from '../../../../components/Content/Messages';

const icon = "wrench";

const Separator = ({ sm }) => <Col xs={12} className={`mb-${sm ? 2 : 3}`} />;

const SubNavLinks = ({ messages, language }) => {
    const [activeTab, setActiveTab] = useState(`${language.abbr}-auth`);
    const [value, setValue] = useState(messages);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
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

        return typeof mainItem === 'string' ? <>
            {prepend}
            <FormGroup className="col-md-6 col-lg-4 align-self-end">
                <Label className="text-small text-500">{mainItem}</Label>
                <Input type="text" name={mainName} id={mainId} placeholder={mainItem} onChange={e => onChange(e, ...mainDeepness)} value={mainValue} />
            </FormGroup>
            {append}
        </> : recursiveDeepness(mainItem, mainName, mainValue, mainDeepness, paramPrepends, paramAppends);
    });



    const navItems = Object.keys(messages).map(key => {
        const id = `${language.abbr}-${key}`;

        return <NavItem key={id}>
            <NavLink className={(activeTab === id) ? 'active' : ""} onClick={() => toggle(id)}>
                <span className="text-capitalize">{key.split('_').join(' ')}</span>
            </NavLink>
        </NavItem>
    });

    const prefix = `${language.abbr}[messages]`;

    const authItem = MESSAGES['auth'];
    const authName = `${prefix}[auth]`;
    const authValue = value['auth'];
    const authDeepness = ['auth'];
    const auth = recursiveDeepness(authItem, authName, authValue, authDeepness, [
        { regex: `${authName}[admin][not_found]`, action: () => <Col xs={12}><h4>Admin</h4></Col> },
        {
            regex: `${authName}[user][inactive]`, action: () => <>
                <Separator />
                <Col xs={12}><h4>User</h4></Col>
            </>
        },
    ]);

    const keys = Object.keys(MESSAGES).filter(key => !['auth'].includes(key));
    const resourceTabPanes = keys.map(item => {
        const currentItem = MESSAGES[item];
        const currentName = `${prefix}[${item}]`;
        const currentValue = value[item];
        const currentDeepness = [item];
        const current = recursiveDeepness(currentItem, currentName, currentValue, currentDeepness);

        return <TabPane key={Math.random() + currentName} tabId={`${language.abbr}-${item}`} className="pt-4">
            <Row>{current}</Row>
        </TabPane>;
    });

    return <div key={Math.random() * Math.random()}>
        <Nav tabs pills>{navItems}</Nav>

        <TabContent activeTab={activeTab}>
            <TabPane tabId={`${language.abbr}-auth`} className="pt-4">
                <Row>{auth}</Row>
            </TabPane>

            {resourceTabPanes}
        </TabContent>
    </div>;
};

class Messages extends Component {
    state = {
        activeTab: process.env.MIX_DEFAULT_LANG
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { messages } } } } = nextProps;
            return updateObject(prevState, { ...messages });
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

    fileUpload = () => document.getElementById('logo').click()

    toggle = tab => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { cms: { title, messages } } } }
                }
            },
            backend: { cms: { loading, error, message, cms, languages } },
            auth: { data: { role: { features } } }
        } = this.props;
        const { activeTab } = this.state;
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
            const nav = languages.map(language => <NavItem key={Math.random()}>
                <NavLink className={(activeTab === language.abbr) ? 'active' : ''} onClick={() => this.toggle(language.abbr)}>
                    {language.name}
                </NavLink>
            </NavItem>);

            const tabContent = languages.map(language => <TabPane key={Math.random()} tabId={language.abbr}>
                <SubNavLinks messages={cms.pages[language.abbr].messages} language={language} />
            </TabPane>);

            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={icon} title={messages} link="/admin/cms" innerClassName="row" className="shadow-sm">
                            <Col lg={12}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <Col lg={2}>
                                        <Nav tabs vertical pills>{nav}</Nav>
                                    </Col>

                                    <Col lg={10}>
                                        <TabContent activeTab={activeTab}>{tabContent}</TabContent>
                                    </Col>

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb main={messages} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{messages}</Subtitle>
                </TitleWrapper>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(getCms()),
    patch: data => dispatch(patchCms('messages', data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Messages));