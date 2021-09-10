import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: false,
};

const start = (state, action) => updateObject(state, { loading: true, message: null });
const success = (state, action) => updateObject(state, { loading: false, error: null, ...action });
const fail = (state, action) => updateObject(state, { loading: false, ...action });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONTENT_START: return start(state, action);
        case actionTypes.CONTENT_SUCCESS: return success(state, action);
        case actionTypes.CONTENT_FAIL: return fail(state, action);

        default: return state;
    }
};