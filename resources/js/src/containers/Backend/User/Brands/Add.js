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

import { getBrand, getBrandsInfo, postBrands, patchBrands, resetBrands } from '../../../../store/actions/backend/brands';

const icon = "copyright";
const initialState = {
    name: "",

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
        if (!prevProps.backend.brands.message && this.props.backend.brands.message && this.props.backend.brands.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState, translate: process.env.MIX_DEFAULT_LANG });
            else this.props.history.push({
                pathname: '/user/brands',
                state: {
                    message: this.props.backend.brands.message,
                },
            });
        }
        if ((!prevProps.backend.brands.brand && this.props.backend.brands.brand) || (this.props.edit && !prevProps.backend.brands.message && this.props.backend.brands.message && this.props.backend.brands.message.type === 'success')) {
            const { backend: { brands: { brand } } } = this.props;
            this.setState({ ...brand });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { brands: { title, add, edit, index, form } } } }
                } },
            backend: { brands: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name } = this.state;
        let content;
        let errors = null;

        const feature = features.find(f => f.prefix === 'brands');
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
                                        <FormInput type="text" id="name" className="col-md-6" icon={icon} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
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
                    <Breadcrumb items={this.props.edit && [{ to: '/user/brands', content: index }]} main={this.props.edit ? edit : add} icon={icon} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {redirect}
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={icon} title={this.props.edit ? edit : add} list={index} link="/user/brands" innerClassName="row justify-content-center">
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
    get: id => dispatch(getBrand(id)),
    info: () => dispatch(getBrandsInfo()),
    post: data => dispatch(postBrands(data)),
    patch: (id, data) => dispatch(patchBrands(id, data)),
    reset: () => dispatch(resetBrands()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));