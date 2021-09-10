import * as actionTypes from '../actionTypes';
import { manageResource } from '../../../shared/utility';

const resource = (type, ...params) => manageResource('products', {
    start: () => ({ type: actionTypes.PRODUCTS_START }),
    success: data => ({ type: actionTypes.PRODUCTS_SUCCESS, ...data }),
    fail: error => ({ type: actionTypes.PRODUCTS_FAIL, error })
}, type, ...params);

export const resetProducts = () => ({ type: actionTypes.PRODUCTS_RESET });
export const getProducts = (page = 1, show = 10, search = '') => resource('index', page = 1, show = 10, search = '');
export const getProductsInfo = () => resource('info');
export const getProduct = id => resource('show', id);
export const postProducts = data => resource('post', data);
export const patchProducts = (id, data) => resource('patch', id, data);
export const deleteProducts = id => resource('delete', id);