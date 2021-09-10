import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('admins', {
    start: () => ({ type: actionTypes.ADMINS_START }),
    success: data => ({ type: actionTypes.ADMINS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.ADMINS_FAIL, error })
}, type, ...params);

export const resetAdmins = () => ({ type: actionTypes.ADMINS_RESET });
export const getAdmins = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getAdminsInfo = () => resource('info');
export const getAdmin = id => resource('show', id);
export const postAdmins = data => resource('post', data);
export const patchAdmins = (id, data) => resource('patch', id, data);
export const deleteAdmins = id => resource('delete', id);