import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: {
        loading: false,
        error: null
    },

    blog: {
        loading: false,
        error: null
    },

    contact: {
        loading: false,
        error: null
    },

    footer: {
        loading: false,
        error: null
    }
};

const fProductsReset = (state, action) => updateObject(state, { products: initialState.products });
const fProductsStart = (state, action) => updateObject(state, { products: updateObject(state.products, { loading: true, message: null }) });
const fProductsSuccess = (state, action) => updateObject(state, { products: updateObject(state.products, { loading: false, error: null, ...action }) });
const fProductsFail = (state, action) => updateObject(state, { products: updateObject(state.products, { loading: false, ...action }) });

const fBlogReset = (state, action) => updateObject(state, { blog: initialState.blog });
const fBlogStart = (state, action) => updateObject(state, { blog: updateObject(state.blog, { loading: true, message: null }) });
const fBlogSuccess = (state, action) => updateObject(state, { blog: updateObject(state.blog, { loading: false, error: null, ...action }) });
const fBlogFail = (state, action) => updateObject(state, { blog: updateObject(state.blog, { loading: false, ...action }) });

const fContactReset = (state, action) => updateObject(state, { contact: initialState.contact });
const fContactStart = (state, action) => updateObject(state, { contact: updateObject(state.contact, { loading: true, message: null }) });
const fContactSuccess = (state, action) => updateObject(state, { contact: updateObject(state.contact, { loading: false, error: null, ...action }) });
const fContactFail = (state, action) => updateObject(state, { contact: updateObject(state.contact, { loading: false, ...action }) });

const fFooterReset = (state, action) => updateObject(state, { footer: initialState.footer });
const fFooterStart = (state, action) => updateObject(state, { footer: updateObject(state.footer, { loading: true, message: null }) });
const fFooterSuccess = (state, action) => updateObject(state, { footer: updateObject(state.footer, { loading: false, error: null, ...action }) });
const fFooterFail = (state, action) => updateObject(state, { footer: updateObject(state.footer, { loading: false, ...action }) });

export default (state, action) => {
    switch (action.type) {
        case actionTypes.F_PRODUCTS_RESET: return fProductsReset(state, action);
        case actionTypes.F_PRODUCTS_START: return fProductsStart(state, action);
        case actionTypes.F_PRODUCTS_SUCCESS: return fProductsSuccess(state, action);
        case actionTypes.F_PRODUCTS_FAIL: return fProductsFail(state, action);

        case actionTypes.F_BLOG_RESET: return fBlogReset(state, action);
        case actionTypes.F_BLOG_START: return fBlogStart(state, action);
        case actionTypes.F_BLOG_SUCCESS: return fBlogSuccess(state, action);
        case actionTypes.F_BLOG_FAIL: return fBlogFail(state, action);

        case actionTypes.F_CONTACT_RESET: return fContactReset(state, action);
        case actionTypes.F_CONTACT_START: return fContactStart(state, action);
        case actionTypes.F_CONTACT_SUCCESS: return fContactSuccess(state, action);
        case actionTypes.F_CONTACT_FAIL: return fContactFail(state, action);

        case actionTypes.F_FOOTER_RESET: return fFooterReset(state, action);
        case actionTypes.F_FOOTER_START: return fFooterStart(state, action);
        case actionTypes.F_FOOTER_SUCCESS: return fFooterSuccess(state, action);
        case actionTypes.F_FOOTER_FAIL: return fFooterFail(state, action);

        default: return state;
    }
}