
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.client');
const compiler = webpack(config);
const webpackHotMiddleware = require('webpack-hot-middleware');

exports.inject = (App) => {
    App.use(
        [
            webpackDevMiddleware(compiler, {
                publicPath: config.output.publicPath
            })
        ],
        [
            webpackHotMiddleware(compiler, { })
        ]
    );
}