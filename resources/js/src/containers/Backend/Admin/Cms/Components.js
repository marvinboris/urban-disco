import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../components/Feedback/Feedback';

import { getCms, patchCms, resetCms } from '../../../../store/actions/backend/cms';
import { updateObject } from '../../../../shared/utility';
import COMPONENTS from '../../../../components/Content/Components';

const SubNavLinks = ({ components, language }) => {
    const [activeTab, setActiveTab] = useState(language.abbr + '-form');
    const [value, setValue] = useState(components);

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
            <FormInput type="text" className="col-md-6 col-lg-4" name={mainName} placeholder={mainItem} addon={<span className="text-small text-700">{mainItem}</span>} onChange={e => onChange(e, ...mainDeepness)} value={mainValue} />
            {append}
        </> : recursiveDeepness(mainItem, mainName, mainValue, mainDeepness, paramPrepends, paramAppends);
    });



    const navItems = Object.keys(components).map(key => {
        const id = `${language.abbr}-${key}`;

        return <NavItem key={id}>
            <NavLink className={(activeTab === id) && 'active'} onClick={() => toggle(id)}>
                <span className="text-capitalize">{key}</span>
            </NavLink>
        </NavItem>
    });

    const prefix = `${language.abbr}[components]`;

    const formItem = COMPONENTS['form'];
    const formName = `${prefix}[form]`;
    const formValue = value['form'];
    const formDeepness = ['form'];
    const form = recursiveDeepness(formItem, formName, formValue, formDeepness);

    const listItem = COMPONENTS['list'];
    const listName = `${prefix}[list]`;
    const listValue = value['list'];
    const listDeepness = ['list'];
    const list = recursiveDeepness(listItem, listName, listValue, listDeepness);

    return <>
        <Nav tabs pills>{navItems}</Nav>

        <TabContent activeTab={activeTab}>
            <TabPane tabId={language.abbr + '-form'} className="pt-4">
                <Row>{form}</Row>
            </TabPane>

            <TabPane tabId={language.abbr + '-list'} className="pt-4">
                <Row>{list}</Row>
            </TabPane>
        </TabContent>
    </>;
};

class Components extends Component {
    state = {
        activeTab: process.env.MIX_DEFAULT_LANG
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { components } } } } = nextProps;
            return updateObject(prevState, { ...components });
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
                    pages: { components: { form: { save } }, backend: { pages: { cms: { title, components } } } }
                }
            },
            backend: { cms: { loading, error, message, cms, languages } }
        } = this.props;
        const { activeTab } = this.state;
        let content = null;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;

            if (!languages) languages = [];
            const nav = languages.map(language => <NavItem key={Math.random()}>
                <NavLink className={(activeTab === language.abbr) && 'active'} onClick={() => this.toggle(language.abbr)}>
                    {language.name}
                </NavLink>
            </NavItem>);

            const tabContent = languages.map(language => <TabPane key={Math.random()} tabId={language.abbr}>
                <SubNavLinks components={cms.pages[language.abbr].components} language={language} />
            </TabPane>);

            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faWrench} title={components} link="/admin/cms" innerClassName="row" className="shadow-sm">
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
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={components} icon={faWrench} />
                    <SpecialTitle user icon={faWrench}>{title}</SpecialTitle>
                    <Subtitle user>{components}</Subtitle>
                </div>
                <div className="p-4 pb-0">
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
    patch: data => dispatch(patchCms('components', data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Components));