/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

// import '@babel/polyfill';
import React from "react";
import { hydrate } from "react-dom";
// import { BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';

import App from "./App";
// import routes from './routes';

// const state = window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;

hydrate(<App />, document.querySelector("#root"));

// 接收热更新输出，只有accept才能被更新
if (module.hot) {
    module.hot.accept();
}
