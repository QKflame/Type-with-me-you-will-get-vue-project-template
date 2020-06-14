'use strict'
const path = require('path')
const apiMocker = require('webpack-api-mocker')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8888,
    open: true,
    disableHostCheck: false,
    before (app) {
      apiMocker(app, resolve('./mock/index.js'))
    }
    /* proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    } */
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: {
      // 配置高德地图、echarts、fabricjs 等第三方包的引用
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // 配置 svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('svg-custom')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      }).end()

    // 配置 url-loader 处理字体文件
    config.when(process.env.NODE_ENV === 'production', config => {
      config.module
        .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          options.limit = 1
          options.name = '/static/fonts/[name].[ext]'
          return options
        }).end()
    })

    // 配置 devtool
    config.when(process.env.NODE_ENV === 'development', config => {
      config.devtool('source-map').end()
    })

    config.when(process.env.NODE_ENV === 'production', config => {
      config.plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [{
          inline: /runtime\..*\.js$/
        }]).end()
      config.optimization.runtimeChunk('single')
    })
  }
}
