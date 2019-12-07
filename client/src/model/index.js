import * as res from 'react-easy-state';

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