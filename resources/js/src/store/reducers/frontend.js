import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {};

const resources = [
    'home', 'posts', 'products',
];

resources.forEach(resource => {
    initialState[resource] = {
        loading: false,
        error: null
    }
});

const reset = (root, state) => updateObject(state, { [root]: initialState[root] });
const start = (root, state) => updateObject(state, { [root]: updateObject(state[root], { loading: true, message: null }) });
const success = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, error: null, ...action }) });
const fail = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_RESET: return reset('home', state);
        case actionTypes.HOME_START: return start('home', state);
        case actionTypes.HOME_SUCCESS: return success('home', state, action);
        case actionTypes.HOME_FAIL: return fail('home', state, action);
        
        case actionTypes.POSTS_RESET: return reset('posts', state);
        case actionTypes.POSTS_START: return start('posts', state);
        case actionTypes.POSTS_SUCCESS: return success('posts', state, action);
        case actionTypes.POSTS_FAIL: return fail('posts', state, action);
        
        case actionTypes.PRODUCTS_RESET: return reset('products', state);
        case actionTypes.PRODUCTS_START: return start('products', state);
        case actionTypes.PRODUCTS_SUCCESS: return success('products', state, action);
        case actionTypes.PRODUCTS_FAIL: return fail('products', state, action);

        default: return state;
    }
};