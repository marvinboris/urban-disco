import * as actionTypes from '../../actions/actionTypes';

export const productsReset = () => ({ type: actionTypes.PRODUCTS_RESET });
const productsStart = () => ({ type: actionTypes.PRODUCTS_START });
const productsSuccess = data => ({ type: actionTypes.PRODUCTS_SUCCESS, ...data });
const productsFail = error => ({ type: actionTypes.PRODUCTS_FAIL, error });
export const getProducts = () => async dispatch => {
    dispatch(productsStart());

    try {
        const res = await fetch(`${PREFIX}products`);
        const resData = await res.json();
        dispatch(productsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(productsFail(error));
    }
}

export const getProduct = slug => async dispatch => {
    dispatch(productsStart());

    try {
        const res = await fetch(`${PREFIX}products/${slug}`);
        const resData = await res.json();
        dispatch(productsSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(productsFail(error));
    }
}