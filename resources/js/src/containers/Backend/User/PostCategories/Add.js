import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, FormGroup, Input, Row } from 'reactstrap';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import Save from '../../../../components/Backend/UI/Food/Form/Save';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import { getPostCategory, getPostCategoriesInfo, postPostCategories, patchPostCategories, resetPostCategories } from '../../../../store/actions/backend/post-categories';

const icon = "th-list";
const initialState = {
    name: {},
    is_active: '1',

    translate: '',

    add: false,
}

class Add extends Component {
    state = { ...initialState }



    // Component methods
    saveHandler = e => {
        e.preventDefault();
        if (this.props.edit) this.props.patch(this.props.match.params.id, e.target);
        else this.props.post(e.target);
    }

    saveAddHandler = () => this.setState({ add: true }, () => this.props.post(document.querySelector('form')))

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name.includes('[')) {
            const { translate } = this.state;
            const stateName = name.split('[')[0];
            const element = this.state[stateName];
            element[translate] = value;
            return this.setState({ [stateName]: element });
        }
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
        this.setState({ translate: process.env.MIX_DEFAULT_LANG });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.post_categories.message && this.props.backend.post_categories.message && this.props.backend.post_categories.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState, translate: process.env.MIX_DEFAULT_LANG });
            else this.props.history.push({
                pathname: '/user/post-categories',
                state: {
                    message: this.props.backend.post_categories.message,
                },
            });
        }
        if ((!prevProps.backend.post_categories.post_category && this.props.backend.post_categories.post_category) || (this.props.edit && !prevProps.backend.post_categories.message && this.props.backend.post_categories.message && this.props.backend.post_categories.message.type === 'success')) {
            const { backend: { post_categories: { post_category } } } = this.props;
            this.setState({ ...post_category });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { active, inactive } }, backend: { pages: { post_categories: { title, add, edit, index, form } } } }
                }, languages
            },
            backend: { post_categories: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, is_active, translate } = this.state;
        let content;
        let errors = null;

        const feature = features.find(f => f.prefix === 'post-categories');
        const redirect = !(feature && JSON.parse(feature.permissions).includes(this.props.edit ? 'u' : 'c')) && <Redirect to="/user/dashboard" />;

        const languagesOptions = languages.sort((a, b) => a.name > b.name).map(language => <option key={JSON.stringify(language)} value={language.abbr}>{language.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Col xl={9}>
                        <Feedback message={message} />

                        {this.props.edit && <input type="hidden" name="_method" defaultValue="PATCH" />}

                        <div className="shadow-lg rounded-8 bg-white px-4 px-sm-5 py-3 py-sm-4">
                            <Row className="my-2 my-sm-3">
                                <div className="col-lg-9">
                                    <div className="row">
                                        {languages.map(l => <Fragment key={'language-' + l.abbr}>
                                            <FormInput type="text" id={"name-" + l.abbr} className={"col-md-6" + (l.abbr === translate ? "" : " d-none")} icon={icon} onChange={this.inputChangeHandler} value={name[l.abbr]} name={"name[" + l.abbr + "]"} required placeholder={form.name} />
                                        </Fragment>)}
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <FormGroup>
                                        <Input type="select" name="translate" onChange={this.inputChangeHandler} value={translate}>
                                            {languagesOptions}
                                        </Input>
                                    </FormGroup>
                                </div>

                                <div className="col-12 mb-3">
                                    <hr />
                                </div>

                                <div className="col-lg-9">
                                    <Row>
                                        <FormInput type="select" className="col-md-6" icon="pencil-alt" onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option>{form.select_status}</option>
                                            <option value={1}>{active}</option>
                                            <option value={0}>{inactive}</option>
                                        </FormInput>
                                    </Row>
                                </div>


                                <Save edit={this.props.edit} saveAddHandler={this.saveAddHandler} />
                            </Row>
                        </div>
                    </Col>
                </>
            );
        }

        return (
            <>
                <TitleWrapper>
                    <Breadcrumb items={this.props.edit && [{ to: '/user/post-categories', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/user/post-categories" innerClassName="row justify-content-center">
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
    get: id => dispatch(getPostCategory(id)),
    info: () => dispatch(getPostCategoriesInfo()),
    post: data => dispatch(postPostCategories(data)),
    patch: (id, data) => dispatch(patchPostCategories(id, data)),
    reset: () => dispatch(resetPostCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));