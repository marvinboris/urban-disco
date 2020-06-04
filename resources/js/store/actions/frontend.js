import * as actionTypes from '../actions/actionTypes';
import { rootPath } from '../..';

const prefix = rootPath + 'frontend/';

export const fProductsReset = () => ({ type: actionTypes.F_PRODUCTS_RESET });
const fProductsStart = () => ({ type: actionTypes.F_PRODUCTS_START });
const fProductsSuccess = data => ({ type: actionTypes.F_PRODUCTS_START, ...data });
const fProductsFail = error => ({ type: actionTypes.F_PRODUCTS_FAIL, error });
export const fGetProducts = () => async dispatch => {
    dispatch(fProductsStart());

    try {
        const res = await fetch(prefix + 'products');
        const resData = await res.json();
        dispatch(fProductsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(fProductsFail(error));
    }
}

export const fGetProduct = slug => async dispatch => {
    dispatch(fProductsStart());

    try {
        const res = await fetch(prefix + 'products/' + slug);
        const resData = await res.json();
        dispatch(fProductsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(fProductsFail(error));
    }
}



export const fBlogReset = () => ({ type: actionTypes.F_BLOG_RESET });
const fBlogStart = () => ({ type: actionTypes.F_BLOG_START });
const fBlogSuccess = data => ({ type: actionTypes.F_BLOG_START, ...data });
const fBlogFail = error => ({ type: actionTypes.F_BLOG_FAIL, error });
export const fGetPosts = () => async dispatch => {
    dispatch(fBlogStart());

    try {
        const res = await fetch(prefix + 'posts');
        const resData = await res.json();
        dispatch(fBlogSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(fBlogFail(error));
    }
}

export const fGetPost = slug => async dispatch => {
    dispatch(fBlogStart());

    try {
        const res = await fetch(prefix + 'posts/' + slug);
        const resData = await res.json();
        dispatch(fBlogSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(fBlogFail(error));
    }
}