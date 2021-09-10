import * as actionTypes from './actionTypes';

const authStart = () => ({ type: actionTypes.AUTH_START });
const authMessage = message => ({ type: actionTypes.AUTH_MESSAGE, message });
const authFail = error => ({ type: actionTypes.AUTH_FAIL, error });

export const authDataUpdateSuccess = data => ({ type: actionTypes.AUTH_DATA_UPDATE_SUCCESS, data: { ...data } });

const authUserLoginSuccess = (token, data) => ({ type: actionTypes.AUTH_USER_LOGIN_SUCCESS, token, data: { ...data }, role: 'user' });

const authRestaurantLoginSuccess = (token, data) => ({ type: actionTypes.AUTH_RESTAURANT_LOGIN_SUCCESS, token, data: { ...data }, role: 'restaurant' });
const authAutoRenewSuccess = auto_renew => ({ type: actionTypes.AUTH_AUTO_RENEW_SUCCESS, auto_renew });
const authPhotoSuccess = photo => ({ type: actionTypes.AUTH_PHOTO_SUCCESS, photo });
const authSignupSuccess = email => ({ type: actionTypes.AUTH_SIGNUP_SUCCESS, signup: { status: true, email } });
export const clearSignup = () => ({ type: actionTypes.CLEAR_SIGNUP, signup: { status: false, email: null } });

const authAdminLoginSuccess = hash => ({ type: actionTypes.AUTH_ADMIN_LOGIN_SUCCESS, hash });
const authAdminVerifySuccess = (token, data) => ({ type: actionTypes.AUTH_ADMIN_VERIFY_SUCCESS, token, data: { ...data }, role: 'admin' });
const resendCodeSuccess = (hash, message) => ({ type: actionTypes.RESEND_CODE_SUCCESS, hash, message });

const authLogoutSuccess = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT_SUCCESS,
    };
};

const checkAuthTimeout = expirationTime => dispatch => {
    setTimeout(() => {
        dispatch(authLogout());
    }, expirationTime);
};

export const authUserLogin = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(PREFIX + 'user/login', {
            method: 'POST',
            body: form
        });

        const resData = await res.json();

        let { access_token, token_type, expires_at, userData } = resData;
        const token = token_type + ' ' + access_token;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        const expirationDate = new Date(expires_at);
        localStorage.setItem('token', token);
        localStorage.setItem('lang', userData.language);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authUserLoginSuccess(token, userData));
        dispatch(checkAuthTimeout(expires_at - new Date().getTime()));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authRestaurantLogin = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}restaurant/login`, {
            method: 'POST',
            body: form
        });

        const resData = await res.json();

        let { access_token, token_type, expires_at, userData } = resData;
        const token = token_type + ' ' + access_token;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        const expirationDate = new Date(expires_at);
        localStorage.setItem('token', token);
        localStorage.setItem('lang', userData.language);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authRestaurantLoginSuccess(token, userData));
        dispatch(checkAuthTimeout(expires_at - new Date().getTime()));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authAutoRenew = () => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(`${PREFIX}restaurant/auto-renew`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': token
            }
        });

        const resData = await res.json();

        dispatch(authAutoRenewSuccess(resData.auto_renew));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authSignup = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}restaurant/signup`, {
            method: 'POST',
            mode: 'cors',
            body: form,
        });

        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        dispatch(authSignupSuccess(resData.email));
    } catch (error) {
        console.log(error);
        dispatch(authFail(error));
    }
};

export const forgotPassword = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}restaurant/forgot`, {
            method: 'POST',
            mode: 'cors',
            body: form,
        });

        const resData = await res.json();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData);

        dispatch(authMessage(resData.message));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const resetPassword = (id, code, data) => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}restaurant/reset/${id}/${code}`, {
            method: 'POST',
            mode: 'cors',
            body: form,
        });

        const resData = await res.json();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData);

        dispatch(authMessage(resData.message));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authAdminLogin = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}admin/login`, {
            method: 'POST',
            body: form
        });

        const resData = await res.json();

        let { hash } = resData;

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        dispatch(authAdminLoginSuccess(hash));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authAdminVerify = data => async dispatch => {
    dispatch(authStart());

    try {
        const form = new FormData(data);

        const res = await fetch(`${PREFIX}admin/verify`, {
            method: 'POST',
            body: form,
        });

        const resData = await res.json();

        let { access_token, token_type, expires_at, userData } = resData;
        const token = token_type + ' ' + access_token;
        expires_at = new Date(expires_at).getTime();

        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status === 403 || res.status === 401) return dispatch(authMessage(resData.message));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

        const expirationDate = new Date(expires_at);
        localStorage.setItem('token', token);
        localStorage.setItem('lang', userData.language);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authAdminVerifySuccess(token, userData));
        dispatch(checkAuthTimeout(expires_at - new Date().getTime()));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const resendCode = hash => async dispatch => {
    dispatch(authStart());

    try {
        const formData = new FormData();
        formData.append('hash', hash);

        const res = await fetch(`${PREFIX}resend`, {
            method: 'POST',
            body: formData,
        });

        const resData = await res.json();

        dispatch(resendCodeSuccess(resData.hash, resData.message));
    } catch (error) {
        dispatch(authFail());
    }
};

export const authPhoto = photo => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');

    try {
        const formData = new FormData();
        formData.append('photo', photo);

        const res = await fetch(`${PREFIX}photo`, {
            method: 'POST',
            mode: 'cors',
            body: formData,
            headers: {
                'Authorization': token
            }
        });

        const resData = await res.json();

        dispatch(authPhotoSuccess(resData.photo));
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const authLogout = () => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');

    try {
        const res = await fetch(PREFIX + 'logout', {
            method: 'GET',
            headers: {
                Authorization: token
            }
        });

        if (res.status !== 200) throw new ('Erreur lors de la récupération des informations.')

        const resData = await res.json();

        dispatch(authLogoutSuccess());
    } catch (error) {
        dispatch(authFail(error));
    }
};

export const setAuthRedirectPath = path => ({ type: actionTypes.SET_AUTH_REDIRECT_PATH, path });
export const setHash = hash => ({ type: actionTypes.SET_HASH, hash });

export const authCheckState = () => async dispatch => {
    dispatch(authStart());
    const token = localStorage.getItem('token');
    if (!token) dispatch(authLogoutSuccess());
    else {
        try {
            const res = await fetch(PREFIX + 'user', {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });

            const resData = await res.json();

            if (res.status === 521) await dispatch(authLogoutSuccess());
            else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);

            const { data, role } = resData;

            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate > new Date()) {
                if (role === 'admin') dispatch(authAdminVerifySuccess(token, data));
                else if (role === 'user') dispatch(authUserLoginSuccess(token, data));
                else if (role === 'restaurant') dispatch(authRestaurantLoginSuccess(token, data));
                localStorage.setItem('lang', data.language);
                dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
            } else dispatch(authLogoutSuccess());
        } catch (error) {
            console.log(error);
            dispatch(authFail(error));
        }
    }
};