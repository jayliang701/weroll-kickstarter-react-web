
import React from "react";
import { render, hydrate } from "react-dom";

import App from "./App";
import './model';

let renderFunc = render;
try {
    if (window) {
        renderFunc = render; 
    }
} catch (err) {
    renderFunc = hydrate;
}
renderFunc(<App />, document.querySelector("#root"));

// 接收热更新输出，只有accept才能被更新
if (module.hot) {
    module.hot.accept();
}
