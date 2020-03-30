import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, Card, Form, FormGroup, Button, Spinner } from 'reactstrap';

import './Login.css';
import Logo from '../../../components/UI/Logo/Logo';
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions';
import { updateObject, checkValidity } from '../../../shared/utility';

class Login extends Component {
    state = {
        formError: false,
        formLoading: false,
        controls: {
            email: {
                elementConfig: {
                    type: 'email',
                    label: 'Adresse mail',
                    autoFocus: true
                },
                icon: 'envelope',
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
            },
            password: {
                elementConfig: {
                    type: 'password',
                    label: 'Mot de passe'
                },
                icon: 'lock',
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            remember: {
                elementConfig: {
                    type: 'checkbox',
                    label: 'Se souvenir de moi',
                    className: 'mb-3'
                },
                value: '',
                valid: true,
                validation: {}
            }
        }
    }

    componentDidMount() {
        if (!this.props.auth.authPage) this.props.onAuthPageOn();
        if (this.props.auth.userPage) this.props.onUserPageOff();
        this.props.onSetAuthRedirectPath();
        // this.props.onCsrfToken();
    }

    componentWillUnmount() {
        this.props.onAuthErrorReset();
    }

    inputChangedHandler = (event) => {
        const { files, name, value } = event.target;
        const { controls } = this.state;
        this.setState(updateObject(this.state, {
            controls: updateObject(controls, {
                [name]: updateObject(controls[name], {
                    value: files ? files[0] : value,
                    valid: checkValidity(value, controls[name].validation),
                    touched: true
                })
            })
        }));

        this.setState({ formError: false });
    }

    submitHandler = event => {
        const { controls } = this.state;
        event.preventDefault();
        const data = {};
        let valid = true;

        for (const key in controls) {
            if (controls.hasOwnProperty(key)) {
                const element = controls[key];
                data[key] = element.value;
                if (element.hasOwnProperty('valid')) valid = valid && element.valid;
            }
        }

        if (valid) {
            this.props.onAuthErrorReset();
            this.props.onAuthLogin(data);
            this.setState({ formError: false });
        }
        else this.setState({ formError: true });
    }

    render() {
        const { controls, formValid, formError, formLoading } = this.state;
        const { token: authToken, authRedirectPath, error: authError, loading: authLoading } = this.props.auth;
        // const { loading: csrfLoading, error: csrfError, token: csrfToken } = this.props.csrf;

        let redirect = null;
        if (authToken !== null) redirect = <Redirect to={authRedirectPath} />;

        let globalError = null;
        if (!formValid && formError) globalError = <p className="text-center text-danger">Veuillez vérifier vos informations.</p>;

        const formContent = Object.keys(controls).map(control => (
            <Input
                key={control}
                value={controls[control].value}
                onChange={event => this.inputChangedHandler(event)}
                name={control}
                icon={controls[control].icon}
                className={controls[control].elementConfig.className}
                check={['radio', 'checkbox'].includes(controls[control].elementConfig.type)}
                required={controls[control].validation.required}
                type={controls[control].elementConfig.type}
                invalid={!controls[control].valid}
                touched={controls[control].touched}
                shouldValidate={controls[control].validation ? true : false}
                autoFocus={controls[control].elementConfig.autoFocus}>{controls[control].elementConfig.label}</Input>
        ));

        let form = (
            <>
                {globalError}
                {authError ? <div className="alert alert-danger">{authError.message}</div> : null}
                {/* {csrfError ? <div className="alert alert-danger">{csrfError.message}</div> : null} */}
                <Form onSubmit={event => this.submitHandler(event)}>
                    {/* <input type="hidden" value={csrfToken || ""} /> */}
                    {formContent}
                    <FormGroup>
                        <Button color="danger" block>Se connecter<FontAwesomeIcon icon="sign-in-alt" size="lg" className="ml-1" /></Button>
                    </FormGroup>
                    <NavLink to="/" className="text-info">Mot de passe oublié ?</NavLink>{' '}
                    <NavLink to="/signup" className="text-danger">Je n'ai pas de compte.</NavLink>
                </Form>
            </>
        );
        if (formLoading || authLoading) form = <div className="text-center"><Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="danger" /></div>;
        // if (formLoading || authLoading || csrfLoading) form = <div className="text-center"><Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="danger" /></div>;

        return (
            <Col xs={12} className="Login p-0 bg-info-danger">
                {redirect}
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={7}>
                            <Card className="py-4 px-5 rounded-lg shadow-sm">
                                <div className="text-center mb-3">
                                    <NavLink to="/" className="text-decoration-none"><Logo /></NavLink>
                                </div>
                                <h5 className="text-uppercase font-weight-light text-center mb-3">Connexion</h5>
                                {form}
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthPageOn: () => dispatch(actions.authPageOn()),
    onUserPageOff: () => dispatch(actions.userPageOff()),
    onAuthErrorReset: () => dispatch(actions.authErrorReset()),
    onAuthLogin: data => dispatch(actions.authLogin(data)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);