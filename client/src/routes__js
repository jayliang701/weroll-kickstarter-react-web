import React from 'react';
import * as pm from './utils/pm';

const map = {
    '/': () => import('./pages/Home'),   //普通子页面定义
    '/user': () => import('./pages/User'),
    '/user/:id': () => import('./pages/UserProfile'),  //定义带参数url的页面路由
    '/about': () => import('./pages/AboutUs'),  //状态管理测试
    // 其他的子页面注册在这里
};

const regexMap = pm.processRegexMap(map);

export const lookUpPage = (url) => {
    const { mod } = pm.lookUpPage(map, url, regexMap);
    return mod;
}
