var express=require('express');
var router=express.Router();
var User = require('../mongo/model/user');
var Article = require('../mongo/model/article');

//get home page,因为使用了react-router来处理处理做单页应用，在express中我们就只用给其一个入口路径
router.get('/',function(req,res,next){
    res.render('./index');
});

//获取用户信息
router.get('/api/user/:user_id',function(req,res){
	User.findOne({_id:req.params.user_id},function(err,user){
		if(err){return console.error(err);}
		res.json(user);
	})
})

//登录获取用户信息
router.post('/api/user',function(req,res){

	var data = req.body;

	User.signIn(data,function(user){
		res.json(user);
	})
})

//获取某人所有文章
router.get('/api/articles',function(req,res){

	var user_id = req.query.user_id;

	Article.find({_creator:user_id },function(err,articles){
		if(err){return console.error(err);}
		console.log(articles);
		res.json(articles);
	})
})

//获取文章详细信息
router.get('/api/article/:article_id',function(req,res){

	var article_id = req.params.article_id;

	Article.findOne({_id:article_id },function(err,article){
		if(err){return console.error(err);}
		res.json(article);
	})
})

//post请求新建用户
router.post('/api/user/new',function(req,res){

	var data = req.body;

	User.signUp(data,function(){
		res.json({success:true})
	});
})


//post请求新建文章
router.post('/api/article/new',function(req,res){

	var data = req.body;

	User.findOne({_id:data.user_id},function(err,user){
		if(err){return console.error(err);}
		Article.create({
			title:data.title,
			label:data.label,
			content:data.content,
			_creator:user._id,
		},function(err,article){
			if(err){return console.error(err);}
			user.articles.push(article._id);
			var user_id = user._id; //需要取出主键_id
      		delete user._id;
			User.update({_id:user_id},user,function(err){
				if(err){console.log(err)}
					console.log("更新成功")
			});
			console.log('创建文章成功')
			res.json(article)
		})
	})
})

router.get('/*',function(req,res,next){
    res.render('./index');
});


module.exports=router;