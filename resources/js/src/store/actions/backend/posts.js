import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('posts', {
    start: () => ({ type: actionTypes.POSTS_START }),
    success: data => ({ type: actionTypes.POSTS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.POSTS_FAIL, error })
}, type, ...params);

export const resetPosts = () => ({ type: actionTypes.POSTS_RESET });
export const getPosts = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getPostsInfo = () => resource('info');
export const getPost = id => resource('show', id);
export const postPosts = data => resource('post', data);
export const patchPosts = (id, data) => resource('patch', id, data);
export const deletePosts = id => resource('delete', id);