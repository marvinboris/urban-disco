import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('brands', {
    start: () => ({ type: actionTypes.BRANDS_START }),
    success: data => ({ type: actionTypes.BRANDS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.BRANDS_FAIL, error })
}, type, ...params);

export const resetBrands = () => ({ type: actionTypes.BRANDS_RESET });
export const getBrands = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getBrandsInfo = () => resource('info');
export const getBrand = id => resource('show', id);
export const postBrands = data => resource('post', data);
export const patchBrands = (id, data) => resource('patch', id, data);
export const deleteBrands = id => resource('delete', id);