var express=require('express');
var router=express.Router();
var User = require('../mongo/model/user');
var Article = require('../mongo/model/article');

//get home page,因为使用了react-router来处理处理做单页应用，在express中我们就只用给其一个入口路径
router.get('/',function(req,res,next){
    res.render('./index');
});

//获取用户信息
router.get('/user/:user_id',function(req,res){
	User.findOne({_id:req.params.user_id},function(err,user){
		if(err){return console.error(err);}
		res.json(user);
	})
})

//登录获取用户信息
router.post('/user',function(req,res){

	var data = req.body;

	User.findOne({
			username:data.username,
			password:data.password
		},function(err,user){
			if(err){return console.error(err);}
			res.json(Object.assign({success:true},user));
	})
})

//获取某人所有文章
router.get('/articles',function(req,res){

	var user_id = req.query.user_id;

	User.findOne({_id:user_id }).populate('Article').exec(function(err,articles){
		if(err){return console.error(err);}
		console.log(articles);
		res.json(articles);
	})
})

//post请求新建用户
router.post('/user/new',function(req,res){

	var data = req.body;

	User.create({
		username:data.username,
		password:data.password,
		avatar_url:data.avatar_url
	},function(err,user){
			if(err){return console.error(err)};
			res.json(Object.assign({success:true},user));
		})
})


//post请求新建文章
router.post('/article/new',function(req,res){

	var data = req.body;

	User.findOne({_id:data.user_id},function(err,user){
		if(err){return console.error(err);}
		Article.create({
			title:data.title,
			label:data.babel,
			content:data.content,
			_creator:user._id,
		},function(err,article){
			if(err){return console.error(err);}
			user.articles.push(article);
			console.log('创建文章成功')
		})
	})
})

router.get('/*',function(req,res,next){
    res.render('./index');
});


module.exports=router;