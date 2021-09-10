import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
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
import TitleWrapper from '../../../../components/Backend/UI/TitleWrapper';
import Feedback from '../../../../components/Feedback/Feedback';

import { getLanguages } from '../../../../store/actions/backend/languages';
import { setLanguage } from '../../../../store/actions/content';

const icon = "cog";

class Edit extends Component {
    state = {
        id: '',
        abbr: '',
    }

    async componentDidMount() {
        this.props.get();
        this.setState({ abbr: localStorage.getItem('lang') });
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(this.state.id);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        if (name === 'abbr') {
            const language = this.props.backend.languages.languages.find(l => l.abbr === value);
            return this.setState({ id: language.id, abbr: value });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { settings: { title, language: { title: title_, form } } } } }
                }
            },
            backend: { languages: { loading, error, message, languages } }
        } = this.props;
        let { id, abbr } = this.state;
        let content = null;
        let errors = null;

        if (!languages) languages = [];
        const languagesOptions = languages.sort((a, b) => a.name > b.name).map(item => <option key={item.name} value={item.abbr}>{item.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={icon} title={title_} innerClassName="row justify-content-center" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row className="justify-content-center">
                                    <input type="hidden" name="id" value={id} />
                                    <FormInput type="select" className="col-md-6" icon={faLanguage} onChange={this.inputChangeHandler} value={abbr} name="abbr" required placeholder={form.select_language}>
                                        <option value="">{form.select_language}</option>
                                        {languagesOptions}
                                    </FormInput>

                                    <div className="col-12 text-center">
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
                    <Breadcrumb main={title_} icon={icon} />
                    <SpecialTitle user>{title}</SpecialTitle>
                    <Subtitle user>{title_}</Subtitle>
                </TitleWrapper>
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
    get: () => dispatch(getLanguages()),
    post: id => dispatch(setLanguage(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));