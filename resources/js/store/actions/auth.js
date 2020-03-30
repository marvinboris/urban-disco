import * as actionTypes from './actionTypes';

export const authReset = () => ({ type: actionTypes.AUTH_RESET });
export const authErrorReset = () => ({ type: actionTypes.AUTH_ERROR_RESET });

export const authPageOn = () => ({ type: actionTypes.AUTH_PAGE_ON });
export const authPageOff = () => ({ type: actionTypes.AUTH_PAGE_OFF });

export const userPageOn = () => ({ type: actionTypes.USER_PAGE_ON });
export const userPageOff = () => ({ type: actionTypes.USER_PAGE_OFF });

export const authLoginStart = () => ({ type: actionTypes.AUTH_LOGIN_START });
export const authLoginSuccess = payload => ({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload });
export const authLoginFail = payload => ({ type: actionTypes.AUTH_LOGIN_FAIL, payload });
export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};
export const checkAuthTimeout = expirationTime => dispatch => {
    setTimeout(() => {
        dispatch(authLogout());
    }, expirationTime);
};
export const authLogin = data => dispatch => {
    dispatch(authLoginStart());
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.status === 422) throw new Error('La validation a échoué.');
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('L\'authentification a échoué.');
            }
            return res.json();
        })
        .then(resData => {
            const expiryDate = new Date(resData.expires_at);
            localStorage.setItem('token', resData.token_type + ' ' + resData.access_token);
            localStorage.setItem('expirationDate', expiryDate.toISOString());
            dispatch(authLoginSuccess(resData));
            dispatch(checkAuthTimeout(expiryDate.getTime() - (new Date()).getTime()));
        })
        .catch(err => {
            dispatch(authLoginFail(err));
        });
};

export const authSignupStart = () => ({ type: actionTypes.AUTH_SIGNUP_START });
export const authSignupSuccess = () => ({ type: actionTypes.AUTH_SIGNUP_SUCCESS });
export const authSignupFail = payload => ({ type: actionTypes.AUTH_SIGNUP_FAIL, payload });
export const authSignup = data => dispatch => {
    dispatch(authSignupStart());
    const formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            formData.append(key, element);
        }
    }
    fetch('/api/auth/signup', {
        method: 'PUT',
        body: formData
    })
        .then(res => {
            if (res.status === 422) throw new Error('La validation a échoué. Assurez-vous que cette adresse mail n\'est pas utilisée.');
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('L\'authentification a échoué.');
            }
            return res.json();
        })
        .then(resData => {
            dispatch(authSignupSuccess());
            dispatch(authLogin(data));
        })
        .catch(error => {
            dispatch(authSignupFail(error));
        })
};

export const setAuthRedirectPath = path => ({ type: actionTypes.SET_AUTH_REDIRECT_PATH, path });

export const getProfileStart = () => ({ type: actionTypes.GET_PROFILE_START });
export const getProfileSuccess = payload => ({ type: actionTypes.GET_PROFILE_SUCCESS, payload });
export const getProfileFail = payload => ({ type: actionTypes.GET_PROFILE_FAIL, payload });
export const getProfile = () => dispatch => {
    dispatch(getProfileStart());
    const token = localStorage.getItem('token');
    fetch('/api/auth/profile', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Erreur lors de la récupération des informations.');
            }
            return res.json();
        })
        .then(resData => {
            dispatch(getProfileSuccess(resData));
        })
        .catch(err => {
            dispatch(getProfileFail(err));
        })
};

export const postProfileStart = () => ({ type: actionTypes.POST_PROFILE_START });
export const postProfileSuccess = payload => ({ type: actionTypes.POST_PROFILE_SUCCESS, payload });
export const postProfileFail = payload => ({ type: actionTypes.POST_PROFILE_FAIL, payload });
export const postProfile = data => dispatch => {
    dispatch(postProfileStart());
    const token = localStorage.getItem('token');
    const formData = new FormData();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            formData.append(key, element);
        }
    }
    fetch('/api/auth/profile', {
        method: 'POST',
        headers: {
            'Authorization': token
        },
        body: formData
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Erreur lors de l\'envoi de la requête.');
            }
            return res.json();
        })
        .then(resData => {
            dispatch(postProfileSuccess(resData));
        })
        .catch(err => {
            dispatch(postProfileFail(err));
        })
};

export const changePasswordStart = () => ({ type: actionTypes.CHANGE_PASSWORD_START });
export const changePasswordSuccess = payload => ({ type: actionTypes.CHANGE_PASSWORD_SUCCESS });
export const changePasswordFail = payload => ({ type: actionTypes.CHANGE_PASSWORD_FAIL });
export const changePassword = data => dispatch => {
    dispatch(changePasswordSuccess());
    const token = localStorage.getItem('token');
    fetch('/api/auth/profile/password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Erreur lors de la modification des informations.');
            }
            return res.json();
        })
        .then(resData => {
            dispatch(changePasswordSuccess(resData));
        })
        .catch(err => {
            dispatch(changePasswordFail(err));
        });
};

export const authCheckState = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) dispatch(authLogout());
    else {
        fetch('/api/auth/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(res => {
                if (res.status === 521) dispatch(authLogout());
                else if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Erreur lors de la récupération des informations.');
                }
                return res.json();
            })
            .then(resData => {
                const expirationDate = new Date(localStorage.getItem('expirationDate'));
                if (expirationDate > new Date()) {
                    dispatch(authLoginSuccess({ token, ...resData }));
                    dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
                } else dispatch(authLogout());
            })
            .catch(err => {
                dispatch(getProfileFail(err));
            })
    }
};