import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('users', {
    start: () => ({ type: actionTypes.USERS_START }),
    success: data => ({ type: actionTypes.USERS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.USERS_FAIL, error })
}, type, ...params);

export const resetUsers = () => ({ type: actionTypes.USERS_RESET });
export const getUsers = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getUsersInfo = () => resource('info');
export const getUser = id => resource('show', id);
export const postUsers = data => resource('post', data);
export const patchUsers = (id, data) => resource('patch', id, data);
export const deleteUsers = id => resource('delete', id);