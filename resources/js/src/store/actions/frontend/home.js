import * as actionTypes from '../actionTypes';

export const resetHome = () => ({ type: actionTypes.HOME_RESET });
const homeStart = () => ({ type: actionTypes.HOME_START });
const homeSuccess = data => ({ type: actionTypes.HOME_SUCCESS, ...data });
const homeFail = error => ({ type: actionTypes.HOME_FAIL, error });
export const getHome = () => async dispatch => {
    dispatch(homeStart());

    try {
        const res = await fetch(`${PREFIX}home`);
        const resData = await res.json();

        dispatch(homeSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(homeFail(error));
    }
}

export const postHome = data => async dispatch => {
    dispatch(homeStart());

    try {
        const form = new FormData(data);
        const res = await fetch(`${PREFIX}home`, {
            method: 'POST',
            body: form
        });
        const resData = await res.json();
        if (res.status === 422) throw new Error(Object.values(resData.errors).join('\n'));
        else if (res.status !== 200 && res.status !== 201) throw new Error(resData.error.message);
        dispatch(homeSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(homeFail(error));
    }
};