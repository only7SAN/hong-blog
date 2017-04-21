var express=require('express');

var routes=require('./routes/index');
var app=express();

//nodeJs模板语言，选用ejs(需要安装)，如下配置可正常使用.html文件作为入口
app.engine('.html', require('ejs').__express);
//change the template main catelog
app.set('views',__dirname);
app.set('view engine','html')

var isDev = process.env.NODE_ENV !== 'production';

if(isDev){
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const devConfig = require('./config/dev');

    const compiler=webpack(devConfig);

    app.use(webpackDevMiddleware(compiler,{
        publicPath:devConfig.output.publicPath,
        noInfo:true,
        stats:{
            colors:true
        }
    }));
    app.use(webpackHotMiddleware(compiler))
      //设置静态资源地址
    app.use(express.static(__dirname+'/public'));

    app.use('/',routes)

    app.listen(3000,function(){
        console.log("runing at port:3000")
    })
}