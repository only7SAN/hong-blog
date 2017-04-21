'use strict';
let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');

// Add needed plugins here,reload为true意思是，如果遇到不能hot load 的情况，就整页刷新
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
let config = Object.assign({}, baseConfig, {
  entry: {
        app:[
          './src/app',
          //入口文件修改，原来对应webpack-dev-server的是
          //'webpack-dev-server/client?http://0.0.0.0:8000',
          //'webpack/hot/only-dev-server',改为如下：
          hotMiddlewareScript
        ],  //编译的入口文件
        vendor:'./node_modules/bootstrap/dist/js/bootstrap.js'
      },
  cache: true,
  devtool: 'eval-source-map',
  plugins: [
    //添加下面3个插件，这个原来应该也有，如果没有就加上
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
});

config.module.rules.push({
  test: /\.js|jsx$/,
  exclude: /^node_modules$/,
  use: {
      loader:'babel-loader' ,
      query: {
              presets: ['es2015','react','stage-3']
            }
  },
  include: [].concat(
    path.join(__dirname, '/../src')
  )
});

module.exports = config;