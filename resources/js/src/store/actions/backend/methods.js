import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('methods', {
    start: () => ({ type: actionTypes.METHODS_START }),
    success: data => ({ type: actionTypes.METHODS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.METHODS_FAIL, error })
}, type, ...params);

export const resetMethods = () => ({ type: actionTypes.METHODS_RESET });
export const getMethods = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getMethodsInfo = () => resource('info');
export const getMethod = id => resource('show', id);
export const postMethods = data => resource('post', data);
export const patchMethods = (id, data) => resource('patch', id, data);
export const deleteMethods = id => resource('delete', id);