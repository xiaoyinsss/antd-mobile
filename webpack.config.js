const webpack = require('atool-build/lib/webpack');
const path = require('path');
module.exports = function(webpackConfig, env) {
    webpackConfig.babel.plugins.push('transform-runtime');

    // Support hmr
    if (env === 'development') {
        webpackConfig.devtool = '#eval';
        webpackConfig.babel.plugins.push('dva-hmr');
    } else {
        webpackConfig.babel.plugins.push('dev-expression');
    }

    // Don't extract common.js and common.css
    webpackConfig.plugins = webpackConfig.plugins.filter(function(plugin) {
        return !(plugin instanceof webpack.optimize.CommonsChunkPlugin);
    });

    // 配置scss
    webpackConfig.module.loaders.push({
        test: /\.scss$/,
        exclude: null,
        loaders: [
            'style',
            'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        ]
    })

    // Support CSS Modules
    // Parse all less files as css module.
    webpackConfig.module.loaders.forEach(function(loader, index) {
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.less$/;
        }
        if (loader.test.toString() === '/\\.module\\.less$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.less$/;
        }
        if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
            loader.include = /node_modules/;
            loader.test = /\.css$/;
        }
        if (loader.test.toString() === '/\\.module\\.css$/') {
            loader.exclude = /node_modules/;
            loader.test = /\.css$/;
        }
    });

    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }]);
    return webpackConfig;
};
