import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, Card, Form, FormGroup, Button, Spinner } from 'reactstrap';

import './Signup.css';
import Logo from '../../../components/UI/Logo/Logo';
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions';
import { updateObject, checkValidity } from '../../../shared/utility';

class Signup extends Component {
    state = {
        formError: false,
        formLoading: false,
        controls: {
            name: {
                elementConfig: {
                    type: 'text',
                    label: 'Nom(s) & prénom(s)',
                    autoFocus: true
                },
                icon: 'signature',
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementConfig: {
                    type: 'email',
                    label: 'Adresse mail'
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
            password_confirmation: {
                elementConfig: {
                    type: 'password',
                    label: 'Confirmation du mot de passe'
                },
                icon: 'key',
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            roleId: {
                elementConfig: {
                    type: 'select',
                    label: 'Rôle',
                    options: {
                        array: [],
                        value: '_id',
                        name: 'name'
                    }
                },
                icon: 'user-tag',
                value: '',
                validation: {
                    required: true
                },
                valid: true,
                touched: false,
            },
            phone: {
                elementConfig: {
                    type: 'tel',
                    label: 'Numéro de téléphone'
                },
                icon: 'phone',
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            },
            image: {
                elementConfig: {
                    type: 'file',
                    label: 'Photo'
                },
                icon: 'image',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    componentDidMount() {
        if (!this.props.auth.authPage) this.props.onAuthPageOn();
        if (this.props.auth.userPage) this.props.onUserPageOff();
        this.props.onSetAuthRedirectPath();
        fetch('http://localhost:8080/auth/signup', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Erreur lors de la récupération des rôles.');
                }
                return res.json();
            })
            .then(resData => {
                this.setState({
                    controls: updateObject(this.state.controls, {
                        roleId: updateObject(this.state.controls.roleId, {
                            elementConfig: updateObject(this.state.controls.roleId.elementConfig, {
                                options: updateObject(this.state.controls.roleId.elementConfig.options, {
                                    array: resData.roles
                                })
                            })
                        })
                    })
                });
            })
            .catch(err => {
                console.log(err);
            })
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
            this.props.onAuthSignup(data);
            this.setState({ formError: false });
        }
        else this.setState({ formError: true });
    }

    render() {
        const { controls, formError, formLoading } = this.state;
        const { token, authRedirectPath, error, loading } = this.props.auth;

        let redirect = null;
        if (token !== null) redirect = <Redirect to={authRedirectPath} />

        let globalError = null;
        if (formError) globalError = <p className="text-center text-danger">Veuillez vérifier vos informations.</p>;

        const formContent = Object.keys(controls).map(control => (
            <Input
                key={control}
                value={controls[control].value}
                onChange={event => this.inputChangedHandler(event)}
                name={control}
                icon={controls[control].icon}
                className={controls[control].elementConfig.className}
                check={['radio', 'checkbox'].includes(controls[control].elementConfig.type)}
                select={controls[control].elementConfig.type === 'select'}
                file={controls[control].elementConfig.type === 'file'}
                options={controls[control].elementConfig.options}
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
                {error ? <div className="alert alert-danger">{error.message}</div> : null}
                <Form onSubmit={event => this.submitHandler(event)}>
                    {formContent}
                    <FormGroup>
                        <Button color="danger" block>S'inscrire<FontAwesomeIcon icon="user-plus" size="lg" className="ml-1" /></Button>
                    </FormGroup>
                    <NavLink to="/login" className="text-info">J'ai déjà un compte.</NavLink>
                </Form>
            </>
        );
        if (formLoading || loading) form = <div className="text-center"><Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="danger" /></div>;

        return (
            <Col xs={12} className="Signup p-0 bg-info-danger">
                {redirect}
                <Container className="py-5">
                    <Row className="justify-content-center align-items-center">
                        <Col lg={7}>
                            <Card className="py-4 px-5 rounded-lg shadow-sm">
                                <div className="text-center mb-3">
                                    <NavLink to="/" className="text-decoration-none"><Logo /></NavLink>
                                </div>
                                <h5 className="text-uppercase font-weight-light text-center mb-3">Inscription</h5>
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
    onAuthSignup: data => dispatch(actions.authSignup(data)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));