import * as actionTypes from '../actions/actionTypes';

export const blogReset = () => ({ type: actionTypes.BLOG_RESET });
const blogStart = () => ({ type: actionTypes.BLOG_START });
const blogSuccess = data => ({ type: actionTypes.BLOG_START, ...data });
const blogFail = error => ({ type: actionTypes.BLOG_FAIL, error });
export const getPosts = () => async dispatch => {
    dispatch(blogStart());

    try {
        const res = await fetch(`${PREFIX}blog`);
        const resData = await res.json();
        dispatch(blogSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(blogFail(error));
    }
}

export const getPost = slug => async dispatch => {
    dispatch(blogStart());

    try {
        const res = await fetch(`${PREFIX}blog/${slug}`);
        const resData = await res.json();
        dispatch(blogSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(blogFail(error));
    }
}