import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Col } from 'reactstrap';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import Title from '../../../../components/UI/Titles/Title/Title';
import Input from '../../../../components/UI/Input/Input';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import { authUserLogin, setHash } from '../../../../store/actions/auth';

export class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    componentDidUpdate() {
        const { auth: { hash }, onSetHash, history } = this.props;
        if (hash) {
            onSetHash(hash);
            history.push('/auth/verify');
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { user: { login } } }
                }
            },
            auth: { loading, error, message },
        } = this.props;
        let titleContent, formContent;

        titleContent = <>
            {login.dont_be_late}! <span className="text-border">{login.get_in}</span>
        </>;

        formContent = <>
            <Input type="text" icon="user" onChange={this.inputChangeHandler} validation={{ required: true, isEmail: true }} value={email} name="email" required placeholder={login.email_address} />
            <Input type="password" icon="lock" onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder={login.password} />

            <BetweenButton color="border" size="lg" className="py-3 px-4 btn-block" icon="sign-in-alt">{login.sign_in}</BetweenButton>
        </>;


        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler}>
            {formContent}
        </Form>;

        return <>
            <Title className="h4">
                {titleContent}
            </Title>
            {errors}
            {feedback}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(authUserLogin(data)),
    onSetHash: hash => dispatch(setHash(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);