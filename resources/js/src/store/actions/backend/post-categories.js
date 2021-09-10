import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('post-categories', {
    start: () => ({ type: actionTypes.POST_CATEGORIES_START }),
    success: data => ({ type: actionTypes.POST_CATEGORIES_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.POST_CATEGORIES_FAIL, error })
}, type, ...params);

export const resetPostCategories = () => ({ type: actionTypes.POST_CATEGORIES_RESET });
export const getPostCategories = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getPostCategoriesInfo = () => resource('info');
export const getPostCategory = id => resource('show', id);
export const postPostCategories = data => resource('post', data);
export const patchPostCategories = (id, data) => resource('patch', id, data);
export const deletePostCategories = id => resource('delete', id);