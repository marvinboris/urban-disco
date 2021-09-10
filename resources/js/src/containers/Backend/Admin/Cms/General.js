import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

// General
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

const Separator = ({ sm }) => <Col xs={12} className={`mb-${sm ? 2 : 3}`} />

const SubNavLinks = ({ general, language }) => {
    const [value, setValue] = useState(general);

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

    const prefix = `${language.abbr}[general]`;
    const global = ['Date', 'Time', 'Home'].map(item => <FormInput key={Math.random()} type="text" className="col-md-6 col-lg-4" name={`${prefix}[${item.toLowerCase()}]`} placeholder={item} addon={<span className="text-small text-700">{item}</span>} onChange={e => onChange(e, item.toLowerCase())} value={value[item.toLowerCase()]} />);
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((item, index) => <FormInput key={Math.random()} type="text" className="col-md-6 col-lg-4" name={`${prefix}[days][]`} placeholder={item} addon={<span className="text-small text-700">{item}</span>} onChange={e => onChange(e, 'days', index)} value={value.days[index]} />);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((item, index) => <FormInput key={Math.random()} type="text" className="col-md-6 col-lg-4" name={`${prefix}[months][]`} placeholder={item} addon={<span className="text-small text-700">{item}</span>} onChange={e => onChange(e, 'months', index)} value={value.months[index]} />);

    return <>
        <Row>
            {global}
            <Separator />

            <Col xs={12}>
                <h4>Week days</h4>
            </Col>
            <Separator sm />
            {weekDays}
            <Separator />

            <Col xs={12}>
                <h4>Months</h4>
            </Col>
            <Separator sm />
            {months}
        </Row>
    </>;
};

class General extends Component {
    state = {
        activeTab: process.env.MIX_DEFAULT_LANG
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.cms.cms && prevState.app_name === '') {
            const { backend: { cms: { cms: { general } } } } = nextProps;
            return updateObject(prevState, { ...general });
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
                    pages: { components: { form: { save } }, backend: { pages: { cms: { title, general } } } }
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
                <SubNavLinks general={cms.pages[language.abbr].general} language={language} />
            </TabPane>);

            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faWrench} title={general} link="/admin/cms" innerClassName="row" className="shadow-sm">
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
                    <Breadcrumb main={general} icon={faWrench} />
                    <SpecialTitle user icon={faWrench}>{title}</SpecialTitle>
                    <Subtitle user>{general}</Subtitle>
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
    patch: data => dispatch(patchCms('general', data)),
    reset: () => dispatch(resetCms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(General));