import * as res from 'react-easy-state';
import axios from 'axios';

// this is a global state store
const all = window.__DATA__ || {};
export const user = res.store(all.user || {});
export const data = res.store(all.data || {});
export const setting = all.setting || {};
export const query = all.query || {};
export const serverTime = all.now || 0;

export const view = (component) => {
    return res.view(component);
};

export const update = (params) => {
    if (!params) return;
    res.batch(() => {
        for (let key in params) {
            data[key] = params[key];
        }
    });
}

export const callAPI = async (method, params) => {
    let res = await axios({
        method: 'post',
        url: setting.API_GATEWAY,
        data: {
            method,
            data: {
                ...(params || {}),
            }
        },
        responseType: 'json'
    });
    let result, err;
    if (res.data && res.data.hasOwnProperty('code')) {
        //success response with code/data/msg
        if (res.data.code !== 1) {
            err = new Error(res.data.msg);
            err.code = res.data.code;
            throw err;
        }
        result = res.data.data;
    } else {
        //something wrong
        err = new Error('Network Error');
        throw err;
    }

    return result;
}