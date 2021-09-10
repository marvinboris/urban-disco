import * as actionTypes from './actionTypes';

const contentStart = () => ({ type: actionTypes.CONTENT_START });
const contentSuccess = data => ({ type: actionTypes.CONTENT_SUCCESS, ...data });
const contentFail = error => ({ type: actionTypes.CONTENT_FAIL, error });
export const getContent = () => async (dispatch, getState) => {
    dispatch(contentStart());

    try {
        let lang = localStorage.getItem('lang');
        if (!lang || lang === 'undefined') {
            lang = process.env.MIX_DEFAULT_LANG;
            localStorage.setItem('lang', lang);
        }
        const res = await fetch(`${PREFIX}content/${lang}`);
        const resData = await res.json();

        let { currencies, countries } = getState().content;

        if (!currencies || !countries) {
            const currenciesRes = await fetch(CORS + 'https://raw.githubusercontent.com/mhs/world-currencies/master/currencies.json', { method: 'GET', mode: 'cors' });
            currencies = await currenciesRes.json();

            const phoneRes = await fetch(CORS + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
            const namesRes = await fetch(CORS + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

            const phone = await phoneRes.json();
            const names = await namesRes.json();

            countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] }));

            currencies = currencies.sort((a, b) => a.name.localeCompare(b.name));
            countries = countries.sort((a, b) => a.name.localeCompare(b.name));

            return dispatch(contentSuccess({ ...resData, currencies, countries }));
        }

        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};

export const setLanguage = id => async dispatch => {
    dispatch(contentStart());

    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${PREFIX}content/language/${id}`, {
            headers: {
                Authorization: token
            }
        });
        const resData = await res.json();
        localStorage.setItem('lang', resData.language.abbr);
        dispatch(contentSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(contentFail(error));
    }
};