'use strict'

const path = require('path'),
    // utils = require('./utils'),
    webpack = require('webpack')

var config = require('./config'),
    configWebpack = config.webpack

var HtmlResWebpackPlugin = require('html-res-webpack-plugin'),
    Clean = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin-steamer'),
    CopyWebpackPlugin = require('copy-webpack-plugin-hash'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

var keys = require('lodash/keys')

var prodConfig = {
    entry: configWebpack.entry,
    output: {
        publicPath: configWebpack.cdn,
        path: path.join(configWebpack.path.pub),
        filename: '[name]-' + configWebpack.chunkhash + '.js',
        chunkFilename: 'chunk/[name]-' + configWebpack.chunkhash + '.js',
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
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }, {
                test: /\.(eot|woff|ttf|svg)/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=1000&name=img/[name]' + configWebpack.hash + '.[ext]',
                    // 压缩png图片
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
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
        extensions: ['', '.js', '.jsx', '.es6', 'css', 'scss', 'png', 'jpg', 'jpeg', 'ico'],
        alias: {
            // 使用压缩版本redux
            'redux': 'redux/dist/redux.min',
            'react-redux': 'react-redux/dist/react-redux',
            'safe': path.join(configWebpack.path.src, '/modules/common/safe.jsx'),
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
        // remove previous pub folder
        new Clean(['dist'], {root: path.resolve()}),
        // inject process.env.NODE_ENV so that it will recognize if (process.env.NODE_ENV === '__PROD__')
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(config.env)
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/libs/',
                to: 'libs/'
            }
        ], {
            namePattern: '[name]-' + configWebpack.contenthash + '.js'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new ExtractTextPlugin('./css/[name]-' + configWebpack.contenthash + '.css', {filenamefilter: function(filename) {
            // 由于entry里的chunk现在都带上了js/，因此，这些chunk require的css文件，前面也会带上./js的路径
            // 因此要去掉才能生成到正确的路径/css/xxx.css，否则会变成/css/js/xxx.css
            return filename.replace('/js', '')
        }}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new WebpackMd5Hash(),
        new webpack.NoErrorsPlugin()
    ],
    // 使用外链
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    watch: false, //  watch mode
}

prodConfig.addPlugins = function(plugin, opt) {
    prodConfig.plugins.push(new plugin(opt))
}

keys(configWebpack.htmlres.pub).forEach(function(page) {
    prodConfig.addPlugins(HtmlResWebpackPlugin, {
        filename: page + '.html',
        // template: 'src/' + page + '.html',
        template: 'tools/template.html',
        favicon: 'src/favicon.ico',
        chunks: configWebpack.htmlres.pub[page],
        htmlMinify: {
            removeComments: true,
            collapseWhitespace: true,
        }
    })
})

module.exports = prodConfig
