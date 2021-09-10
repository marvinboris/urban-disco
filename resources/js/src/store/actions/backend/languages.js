import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('languages', {
    start: () => ({ type: actionTypes.LANGUAGES_START }),
    success: data => ({ type: actionTypes.LANGUAGES_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.LANGUAGES_FAIL, error })
}, type, ...params);

export const resetLanguages = () => ({ type: actionTypes.LANGUAGES_RESET });
export const getLanguages = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getLanguagesInfo = () => resource('info');
export const getLanguage = id => resource('show', id);
export const postLanguages = data => resource('post', data);
export const patchLanguages = (id, data) => resource('patch', id, data);
export const deleteLanguages = id => resource('delete', id);