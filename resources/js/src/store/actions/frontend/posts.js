import * as actionTypes from '../actionTypes';

export const resetPosts = () => ({ type: actionTypes.POSTS_RESET });
const postsStart = () => ({ type: actionTypes.POSTS_START });
const postsSuccess = data => ({ type: actionTypes.POSTS_SUCCESS, ...data });
const postsFail = error => ({ type: actionTypes.POSTS_FAIL, error });
export const getPosts = postCategorySlug => async dispatch => {
    dispatch(postsStart());

    try {
        let res;
        if (postCategorySlug) res = await fetch(`${PREFIX}post-categories/${postCategorySlug}/posts`);
        else res = await fetch(`${PREFIX}posts`);
        const resData = await res.json();

        dispatch(postsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(postsFail(error));
    }
}

export const getPost = (postCategorySlug, slug) => async dispatch => {
    dispatch(postsStart());

    try {
        let res
        if (postCategorySlug) res = await fetch(`${PREFIX}post-categories/${postCategorySlug}/posts/${slug}`)
        else res = await fetch(`${prefix}posts/${slug}`);
        const resData = await res.json();

        dispatch(postsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(postsFail(error));
    }
}