import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

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

import { getLanguage, patchLanguages, postLanguages, resetLanguages } from '../../../../store/actions/backend/languages';

const initialState = {
    name: '',
    abbr: '',
    flag: '',

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
        if (!prevProps.backend.languages.message && this.props.backend.languages.message && this.props.backend.languages.message.type === 'success' && !this.props.edit) {
            if (this.state.add) this.setState({ ...initialState });
            else this.props.history.push({
                pathname: '/admin/languages',
                state: {
                    message: this.props.backend.languages.message,
                },
            });
        }
        if (!prevProps.backend.languages.language && this.props.backend.languages.language) {
            const { backend: { languages: { language } } } = this.props;
            this.setState({ ...language });
        }
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { backend: { pages: { languages: { title, add, edit, index, form } } } }
                },
                countries,
            },
            backend: { languages: { loading, error, message } },
        } = this.props;
        let { name, abbr, flag } = this.state;
        let content = null;
        let errors = null;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

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
                                        <FormInput type="text" className="col-md-6" icon={faLanguage} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                        <FormInput type="text" className="col-md-6" icon={faLanguage} onChange={this.inputChangeHandler} value={abbr} name="abbr" required placeholder={form.abbr} />
                                        <FormInput className="col-md-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                                            <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                                                <span className={`flag-icon text-xx-large position-absolute flag-icon-${flag.toLowerCase()}`} />
                                            </div>
                                        </span>} onChange={this.inputChangeHandler} value={flag} validation={{ required: true }} name="flag" required placeholder={form.select_flag}>
                                            <option value="">{form.select_flag}</option>
                                            {countriesOptions}
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
                    <Breadcrumb items={this.props.edit && [{ to: '/admin/languages', content: index }]} main={this.props.edit ? edit : add} icon={faLanguage} />
                    <SpecialTitle>{title}</SpecialTitle>
                    <Subtitle>{this.props.edit ? edit : add}</Subtitle>
                </TitleWrapper>
                <div>
                    {errors}
                    <Row>
                        <Form onSubmit={this.saveHandler} icon={faLanguage} title={this.props.edit ? edit : add} list={index} link="/admin/languages" innerClassName="row justify-content-center">
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
    get: id => dispatch(getLanguage(id)),
    post: data => dispatch(postLanguages(data)),
    patch: (id, data) => dispatch(patchLanguages(id, data)),
    reset: () => dispatch(resetLanguages()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));