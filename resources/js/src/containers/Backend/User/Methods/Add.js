import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

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

import { getMethod, patchMethods, postMethods, resetMethods } from '../../../../store/actions/backend/methods';

const icon = "th-list";
const initialState = {
    name: '',
    text: '',
    is_active: '1',

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
        this.setState({ [name]: files ? files[0] : value });
    }



    // Lifecycle methods
    componentDidMount() {
        this.props.reset();
        if (this.props.edit) this.props.get(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.backend.methods.message && this.props.backend.methods.message && this.props.backend.methods.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/user/methods',
                state: {
                    message: this.props.backend.methods.message,
                },
            });
        }
        if (!prevProps.backend.methods.method && this.props.backend.methods.method) {
            const { backend: { methods: { method } } } = this.props;
            this.setState({ ...method });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { active, inactive } }, backend: { pages: { methods: { title, add, edit, index, form } } } }
                }
            },
            backend: { methods: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, text, is_active } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'methods');
        const redirect = !(feature && JSON.parse(feature.permissions).includes(this.props.edit ? 'u' : 'c')) && <Redirect to="/user/dashboard" />;

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
                                    <Row>
                                        <FormInput type="text" className="col-md-6" icon={icon} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                        <FormInput type="text" className="col-md-6" icon="paragraph" onChange={this.inputChangeHandler} value={text} name="text" required placeholder={form.text} />
                                        <FormInput type="select" className="col-md-6" icon="pencil-alt" onChange={this.inputChangeHandler} value={is_active} name="is_active" required>
                                            <option value="">{form.select_status}</option>
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
                    <Breadcrumb items={this.props.edit && [{ to: '/user/methods', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/user/methods" innerClassName="row justify-content-center">
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
    get: id => dispatch(getMethod(id)),
    post: data => dispatch(postMethods(data)),
    patch: (id, data) => dispatch(patchMethods(id, data)),
    reset: () => dispatch(resetMethods()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));