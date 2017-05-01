var webpack = require('webpack');
var path =require('path');

var publicPath = '/dist'; //服务器路径
var path = path.resolve(__dirname, '../dist');


var plugins = [];

module.exports = {
    entry: {
        app: './src/app',  //编译的入口文件
        vendor:'./node_modules/bootstrap/dist/bootstrap.js'
    },
    output: {
        publicPath, //编译好的文件，在服务器的路径
        path, //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    resolve: {
        extensions: ['.js', '.jsx']
      },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /^node_modules$/,
                use: {
                    loader:'babel-loader' ,
                    query: {
                            presets: ['es2015','react','stage-3']
                          }
                }
            },{
                test: /\.scss$/,
                exclude: /^node_modules$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader',
                    'sass-loader'
                    ]
              }, {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                    ]
            },  {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                use: 'url-loader?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }
        ]
    },
    plugins
};