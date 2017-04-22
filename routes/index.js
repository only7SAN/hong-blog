var express=require('express');
var router=express.Router();
var User = require('../mongo/model/user');
var Article = require('../mongo/model/article');

//get home page,因为使用了react-router来处理处理做单页应用，在express中我们就只用给其一个入口路径
router.get('/',function(req,res,next){
    res.render('./index');
});

//获取用户列表api，这应该是在后端
router.get('/user',function(req,res){
	User.find(function(err,users){
		if(err){return console.error(err);}
		console.log(users);
		res.send(users);
	})
})

//获取文章
router.get('/articles',function(req,res){
	Article.find(function(err,articles){
		if(err){return console.error(err);}
		console.log(articles);
		res.send(articles);
	})
})

//post请求新建文章
router.post('/user/new',function(req,res){

	var data = req.body;

	User.create({
		userName:data.userName,
		password:data.password
	},function(err,article){
			if(err){return console.error(err)};
			console.log('创建用户成功')
		})
})


//post请求新建文章
router.post('/article/new',function(req,res){

	var data = req.body;

	User.findOne({_id:data._id},function(err,articles){
		if(err){return console.error(err);}
		Article.create({
			_creator:data._id,
			title:data.title,
			label:data.babel,
			content:data.content
		},function(err,article){
			if(err){return console.error(err);}
			console.log('创建文章成功')
		})
	})
})

module.exports=router;