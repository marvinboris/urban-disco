import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup } from 'reactstrap';
import { faSignInAlt, faCode } from '@fortawesome/free-solid-svg-icons';

import MyInput from '../../../../components/UI/Input/Input';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Title from '../../../../components/UI/Titles/Title/Title';

import { authAdminVerify, resendCode, setHash } from '../../../../store/actions/auth';

export class Verify extends Component {
    state = {
        code: '',
    }

    componentDidMount() {
        const { auth: { hash }, history } = this.props;
        if (!hash) history.push('/auth/admin/login');
    }

    componentWillUnmount() {
        const { onSetHash } = this.props;
        onSetHash(null);
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
        const { code } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { admin: { verify: { enter, verification_code, didnt_receive_code, resend, continue: continue_ } } } }
                }
            },
            auth: { hash, loading, error, message },
            onResendCode,
        } = this.props;
        let titleContent, formContent;

        titleContent = <>
            {enter} <span className="text-blue">{verification_code}</span>
        </>;

        formContent = <>
            <MyInput type="text" icon={faCode} onChange={this.inputChangeHandler} value={code} name="code" required placeholder={verification_code} />
            <input type="hidden" name="hash" value={hash} />
            <FormGroup className="ml-2 mb-5 mt-4">
                <p className="text-dark text-right">{didnt_receive_code}? <strong className="text-blue" style={{ cursor: 'pointer' }} onClick={() => onResendCode(hash)}>{resend}</strong></p>
            </FormGroup>

            <BetweenButton color="blue" size="lg" className="py-3 px-4 btn-block" icon={faSignInAlt}>{continue_}</BetweenButton>
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
    onAuth: data => dispatch(authAdminVerify(data)),
    onSetHash: hash => dispatch(setHash(hash)),
    onResendCode: hash => dispatch(resendCode(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);