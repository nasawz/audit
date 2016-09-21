'use strict'

const path = require('path'),
    // utils = require('./utils'),
    webpack = require('webpack')

var config = require('./config'),
    configWebpack = config.webpack

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin-steamer'),
    // OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin-hash')

var forEach = require('lodash/forEach')

var devConfig = {
    entry: configWebpack.entry(),
    output: {
        publicPath: configWebpack.defaultPath,
        path: path.join(configWebpack.path.dev),
        filename: 'js/[name].js',
        chunkFilename: 'chunk/[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!postcss!less')
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.(eot|woff|ttf|svg)/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=1000&name=img/[name].[ext]',
                ],
                include: path.resolve(configWebpack.path.src)
            }, {
                test: /\.ico$/,
                loader: 'url-loader?name=[name].[ext]',
                include: path.resolve(configWebpack.path.src)
            },
        ],
        noParse: [

        ]
    },
    resolve: {
        moduledirectories:['node_modules', configWebpack.path.src],
        extensions: ['', '.js', '.jsx', '.es6', 'css', 'less', 'png', 'jpg', 'jpeg', 'ico'],
        alias: {
            'redux': 'redux/dist/redux',
            'react-redux': 'react-redux/dist/react-redux',
            'safe': path.join(configWebpack.path.src, '/modules/common/safe.jsx'),
            'audit': path.join(configWebpack.path.src, '/components/audit'),
            // 'utils': path.join(configWebpack.path.src, '/js/common/utils'),
            // 'spin': path.join(configWebpack.path.src, '/js/common/spin'),
            // 'spinner': path.join(configWebpack.path.src, '/page/common/components/spinner/'),
            // 'net': path.join(configWebpack.path.src, '/js/common/net'),
            // 'touch': path.join(configWebpack.path.src, '/page/common/components/touch/index.js'),
            // 'touch-jsx': path.join(configWebpack.path.src, '/page/common/components/touch/index.jsx'),
            // 'scroll':path.join(configWebpack.path.src, '/page/common/components/scroll/index.js'),
            // 'scroll-jsx':path.join(configWebpack.path.src, '/page/common/components/scroll/index.jsx'),
            // 'pure-render-decorator': path.join(configWebpack.path.src, '/js/common/pure-render-decorator'),
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new CopyWebpackPlugin([
            {
                from: 'src/libs/',
                to: 'libs/'
            }
        ]),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js'),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorOptions: { discardComments: {removeAll: true } },
        //     canPrint: true
        // }),
        new ExtractTextPlugin('./css/[name].css', {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '')
        }}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    watch: true, //  watch mode
    // 是否添加source-map，可去掉注释开启
    devtool: '#inline-source-map',
}

devConfig.addPlugins = function(plugin, opt) {
    devConfig.plugins.push(new plugin(opt))
}

forEach(devConfig.entry,function (value) {
    let conf = require(value[0].replace(/(jsx|js)/g,'json'))
    devConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: conf.dev.filename + '.html',
        title:conf.dev.title,
        template: 'tools/template.html',
        favicon: 'src/favicon.ico',
        chunks: conf.dev.chunks,
        templateContent: function(tpl) {
            // 生产环境不作处理
            if (!this.webpackOptions.watch) {
                return tpl
            }
            var regex = new RegExp('{title}', 'ig')
            tpl = tpl.replace(regex, conf.dev.title)
            return tpl
        },
        htmlMinify: null
    })
})

module.exports = devConfig
