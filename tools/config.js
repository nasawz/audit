/**
 * create by nasa.wang
 */

'use strict'

const path = require('path'),
    utils = require('./utils'),
    __basename = path.dirname(__dirname),
    __env = process.env.NODE_ENV

/**
 * [config basic configuration]
 * @type {Object}
 */

var config = {
    env: __env,
    webpack: {
        path: {
            src: path.resolve(__basename, 'src'),
            dev: path.resolve(__basename, 'dev'),
            pub: path.resolve(__basename, 'dist'),
        },
        defaultPath: '//localhost:9000/',
        cdn: '',
        hash: '[hash:6]',
        chunkhash: '[chunkhash:6]',
        imghash: '',
        contenthash: '[contenthash:6]',
    },
    gulp: {
        path: {
            src: path.resolve(__basename, 'src')
        },
    },
    server: {                    // webpack开发环境服务器配置
        port: 9000,              // port for local server
        hostDirectory: '/cex_app/'  // http://host/hostDirectory/
    },
}

// 根据约定，自动扫描js entry，约定是src/page/xxx/main.js 或 src/page/xxx/main.jsx
/**
    当前获取结果
    {
        'js/index': [path.join(configWebpack.path.src, '/page/index/main.js')],
        'js/spa': [path.join(configWebpack.path.src, '/page/spa/main.js')],
        'js/pindex': [path.join(configWebpack.path.src, '/page/pindex/main.jsx')],
    }
 */
config.webpack.entry = function () {
    return utils.getJsFile(config.webpack.path.src, 'modules', 'main', ['js', 'jsx'])
}

// 合图配置
config.gulp.sprites = {
    tplpath: path.resolve(__basename, 'tools/sprite-template/less.template.handlebars'),
    imgPath: '../../style/sprites/',
    imgName: 'sprites.png',
    cssName: 'sprites.less',
    imgDest: config.gulp.path.src + '/style/sprites/',
    cssDest: config.gulp.path.src + '/style/sprites/',
}

module.exports = config
