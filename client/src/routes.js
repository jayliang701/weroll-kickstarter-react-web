import React from 'react';

import loadable from '@loadable/component';

const Home = loadable(() => import('./pages/Home'), {
  fallback: <div>Loading...</div>,
});

const AboutUs = loadable(() => import('./pages/AboutUs'), {
  fallback: <div>Loading...</div>,
});

const map = {
    '/': Home,
    '/home': Home,
    '/about': AboutUs,
};

export const match = (url) => {
    return map[url];
}
