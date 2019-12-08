import React from 'react';
import * as model from './model';
import loadable from '@loadable/component';

export const preload = (importer) => {
    return loadable(async () => {
        let view = await importer();
        if (typeof view.preload === 'function') {
            let data = await view.preload(model.data, model.user, model.setting, model.query);
            data = data || {};
            model.update(data);
        }
        return view;
    }/*, {
        fallback: <div>Loading...</div>,
    }*/);
}