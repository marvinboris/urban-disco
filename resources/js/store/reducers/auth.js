import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    authPage: false,
    userPage: false,
    error: null,
    token: null,
    loading: false,
    authRedirectPath: '/',
    profile: null,
};

const authReset = (state, action) => initialState;
const authErrorreset = (state, action) => updateObject(state, { error: null });

const authPageOn = (state, action) => updateObject(state, { authPage: true });
const authPageOff = (state, action) => updateObject(state, { authPage: false });

const userPageOn = (state, action) => updateObject(state, { userPage: true });
const userPageOff = (state, action) => updateObject(state, { userPage: false });

const authLoginStart = (state, action) => updateObject(state, { loading: true });
const authLoginSuccess = (state, action) => updateObject(state, {
    token: action.payload.token,
    profile: action.payload,
    loading: false,
});
const authLoginFail = (state, action) => updateObject(state, { error: action.payload, loading: false });
const authLogout = (state, action) => updateObject(state, {
    token: null,
    profile: null,
});

const authSignupStart = (state, action) => updateObject(state, { loading: true });
const authSignupSuccess = (state, action) => updateObject(state, { loading: false });
const authSignupFail = (state, action) => updateObject(state, { error: action.payload, loading: false });

const setAuthRedirectPath = (state, action) => updateObject(state, {
    authRedirectPath: action.path
});

const getProfileStart = (state, action) => updateObject(state, { loading: true });
const getProfileSuccess = (state, action) => updateObject(state, { profile: action.payload, loading: false });
const getProfileFail = (state, action) => updateObject(state, { error: action.payload, loading: false });

const postProfileStart = (state, action) => updateObject(state, { loading: true });
const postProfileSuccess = (state, action) => updateObject(state, {
    profile: action.payload,
    loading: false,
});
const postProfileFail = (state, action) => updateObject(state, { error: action.payload, loading: false });

const changePasswordStart = (state, action) => updateObject(state, { loading: true });
const changePasswordSuccess = (state, action) => updateObject(state, {
    profile: action.payload,
    loading: false,
});
const changePasswordFail = (state, action) => updateObject(state, { error: action.payload, loading: false });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_RESET: return authReset(state, action);
        case actionTypes.AUTH_ERROR_RESET: return authErrorreset(state, action);

        case actionTypes.AUTH_PAGE_ON: return authPageOn(state, action);
        case actionTypes.AUTH_PAGE_OFF: return authPageOff(state, action);

        case actionTypes.USER_PAGE_ON: return userPageOn(state, action);
        case actionTypes.USER_PAGE_OFF: return userPageOff(state, action);

        case actionTypes.AUTH_LOGIN_START: return authLoginStart(state, action);
        case actionTypes.AUTH_LOGIN_SUCCESS: return authLoginSuccess(state, action);
        case actionTypes.AUTH_LOGIN_FAIL: return authLoginFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);

        case actionTypes.AUTH_SIGNUP_START: return authSignupStart(state, action);
        case actionTypes.AUTH_SIGNUP_SUCCESS: return authSignupSuccess(state, action);
        case actionTypes.AUTH_SIGNUP_FAIL: return authSignupFail(state, action);

        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);

        case actionTypes.GET_PROFILE_START: return getProfileStart(state, action);
        case actionTypes.GET_PROFILE_SUCCESS: return getProfileSuccess(state, action);
        case actionTypes.GET_PROFILE_FAIL: return getProfileFail(state, action);

        case actionTypes.POST_PROFILE_START: return postProfileStart(state, action);
        case actionTypes.POST_PROFILE_SUCCESS: return postProfileSuccess(state, action);
        case actionTypes.POST_PROFILE_FAIL: return postProfileFail(state, action);

        case actionTypes.CHANGE_PASSWORD_START: return changePasswordStart(state, action);
        case actionTypes.CHANGE_PASSWORD_SUCCESS: return changePasswordSuccess(state, action);
        case actionTypes.CHANGE_PASSWORD_FAIL: return changePasswordFail(state, action);

        default: return state;
    }
};
