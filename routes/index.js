var express=require('express');
var router=express.Router();
var bcrypt = require('bcrypt');
var User = require('../mongo/model/user');
var Article = require('../mongo/model/article');

//get home page,因为使用了react-router来处理处理做单页应用，在express中我们就只用给其一个入口路径
router.get('/',function(req,res,next){
    res.render('./index');
})

//获取用户详细信息
router.get('/api/user/:user_id',function(req,res){
	User.findOne({_id:req.params.user_id},function(err,user){
		if(err){return console.error(err);}
		res.json(user);
	})
})

//登录获取用户信息
router.post('/api/user',function(req,res){

	var obj = req.body;

	User.findOne({username:obj.username},function(err,user){
		if(err){console.log("用户查找出错")};
		let hash = user.password;
		console.log(obj)
		console.log(user.password)
		bcrypt.compare(obj.password, hash, function(err, result) {
		    // res == true
		    if(err){
		    	console.log("比较密码出错")
		    	res.json(err);
			}else if(result == true){
		    	res.json(user);
		    }
		});
	})
})

//获取某人所有文章
router.get('/api/articles',function(req,res){

	var user_id = req.query.user_id;

	Article.find({_creator:user_id })
	.sort({ create_at: 'desc' })
	.exec(function(err,articles){
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

	var obj = req.body;

	User.find({username:obj.username},function(err,user){
		if(err){
			console.log("查找出错")
		}else if(user.length !== 0){
			console.log("用户已存在");
			res.json({exist:true})
		}else{
			bcrypt.genSalt(10, function(err, salt) {
			    bcrypt.hash(obj.password, salt, function(err, hash) {
			        // Store hash in your password DB.
			        if(err){
			        	console.log("生成hash失败")
			        }else{
				        obj.password = hash;
				        console.log(obj)
					    User.create(obj,function(err,user){
							if(err){
								console.log("录入用户失败")
							}else{
								console.log("录入用户成功");
								res.json({success:true})
							}
						});
					}
			    });
			})
		}
	})
})

//删除用户
router.get('/api/user/del',function(req,res){

	var user_id = req.query.user_id;

	User.remove({_id:user_id},function(err,user){
		if(err){
			console.log(err)
		}else{
			console.log("删除成功");
			res.json({success:true});
		}
	})
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
					console.log("user更新成功")
			});
			console.log('创建文章成功')
			res.json(article)
		})
	})
})

//post请求更新用户
router.post('/api/article/update',function(req,res){

	var data = req.body;

	Article.findOne({_id:data.article_id},function(err,article){
		if(err){
			return console.error(err);
		}else{
			for(name in data){
				data[name] = name;
			}
			article.update_at = new Date();
			article.save(function(err){
				console.log(err);
			})
		}
	})
})

//删除文章
router.get('/api/article/del',function(req,res){

	var article_id = req.query.article_id;

	Article.remove({_id:article_id},function(err,article){
		if(err){
			console.log(err)
		}else{
			console.log("删除成功");
			res.json({success:true});
		}
	})
})

router.get('/*',function(req,res,next){
    res.render('./index');
})

module.exports=router;