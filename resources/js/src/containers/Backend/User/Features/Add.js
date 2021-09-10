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

import { getFeature, patchFeatures, postFeatures, resetFeatures } from '../../../../store/actions/backend/features';

const icon = "tools";
const initialState = {
    name: '',
    prefix: '',

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
        if (!prevProps.backend.features.message && this.props.backend.features.message && this.props.backend.features.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/user/features',
                state: {
                    message: this.props.backend.features.message,
                },
            });
        }
        if (!prevProps.backend.features.feature && this.props.backend.features.feature) {
            const { backend: { features: { feature } } } = this.props;
            this.setState({ ...feature });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { features: { title, add, edit, index, form } } } }
                }
            },
            backend: { features: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, prefix } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'features');
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
                                        <FormInput type="text" className="col-md-6" icon="anchor" onChange={this.inputChangeHandler} value={prefix} name="prefix" required placeholder={form.prefix} />
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
                    <Breadcrumb items={this.props.edit && [{ to: '/user/features', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/user/features" innerClassName="row justify-content-center">
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
    get: id => dispatch(getFeature(id)),
    post: data => dispatch(postFeatures(data)),
    patch: (id, data) => dispatch(patchFeatures(id, data)),
    reset: () => dispatch(resetFeatures()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));