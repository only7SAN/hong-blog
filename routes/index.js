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
	if(!req.params.user_id){
		return res.status(400).json({message:"用户id未提供"})
	}

	User.findOne({_id:req.params.user_id},function(err,user){
		if(err){
			console.log(err);
			return res.status(500).json({error:true,message:"不能提交查找用户请求"})
		}else if(!user){
			return res.status(404).json({message:"用户未找到"})
		}
		res.json(user);
	})
})

//登录获取用户信息
router.post('/api/user',function(req,res){

	var obj = req.body;
	if(!obj.username||!obj.password){
		return res.status(400).json({message:"用户id帐号密码未提供"})
	}

	User.findOne({username:obj.username},function(err,user){
		if(err){
			console.log("用户查找出错")
			return res.status(500).json({error:true,message:"不能提交查找用户请求"})
		}else if(!user){
			return res.status(404).json({message:"未找到用户"})
		}
		let hash = user.password;
		bcrypt.compare(obj.password, hash, function(err, result) {
		    // res == true
		    if(err){
		    	console.log("比较密码出错")
		    	return res.status(404).json({message:"比较密码出错"});
			}else if(result == true){
		    	res.json(user);
		    }
		});
	})
})

//获取某人所有文章
router.get('/api/articles',function(req,res){

	var user_id = req.query.user_id;
	if(!req.query.user_id){
		return res.status(403).json({message:"未提供账户密码"})
	}

	Article.find({_creator:user_id })
	.sort({ create_at: 'desc' })
	.exec(function(err,articles){
		if(err){
			console.error(err);
			return res.status(500).json({error:true,message:"不能提交查找文章请求"})
		}else if(!articles){
			return res.status(404).json({message:"找不到该用户的文章"})
		}
		console.log(articles);
		res.json(articles);
	})
})

//获取文章详细信息
router.get('/api/article/:article_id',function(req,res){

	var article_id = req.params.article_id;
	if(!req.params.article_id){
		return res.status(400).json({message:"未提供文章id"})
	}

	Article.findOne({_id:article_id },function(err,article){
		if(err){
			console.error(err);
			return res.status(500).json({error:true,message:"不能提交查找文章请求"})
		}else if(!article){
			return res.status(404).json({message:"找不到该用户的文章详细内容"})
		}
		res.json(article);
	})
})

//post请求新建用户
router.post('/api/user/new',function(req,res){

	var obj = req.body;
	if(!obj.username||!obj.password||!obj.avatar_url){
		return res.status(400).json({message:"请提供 用户名 密码 和 头像"})
	}

	User.find({username:obj.username},function(err,user){
		if(err){
			console.error(err);
			return res.status(500).json({error:true,message:"不能提交查找用户请求"})
		}else if(user.length !== 0){
			console.log("用户已存在");
			return res.json({exist:true})
		}else{
			bcrypt.genSalt(10, function(err, salt) {
			    bcrypt.hash(obj.password, salt, function(err, hash) {
			        // Store hash in your password DB.
			        if(err){
			        	console.log("生成hash失败")
			        	return res.status(500).json({error:true,message:"生成hash请求失败"})
			        }else{
				        obj.password = hash;
				        console.log(obj)
					    User.create(obj,function(err,user){
							if(err){
								console.log("录入用户失败");
								return res.status(500).json({error:true,message:"创建用户请求失败"});
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
	if(!req.query.user_id){
		return res.status(403).json({message:"请提供 用户id"})
	}

	User.remove({_id:user_id},function(err,user){
		if(err){
			console.log(err);
			return res.status(500).json({error:true,message:"删除用户请求失败"})
		}else if(!user){
			return res.status(404).json({message:"没有找到要删除的用户"})
		}else{
			console.log("删除成功");
			res.json({success:true});
		}
	})
})


//post请求新建文章
router.post('/api/article/new',function(req,res){

	var data = req.body;
	if(!data.user_id){
		return res.status(403).json({message:"请提供用户id"})
	}else if(!data.title||!data.label||!data.content){
		return res.status(400).json({message:"请提供 标题 标签 和 内容"})
	}

	User.findOne({_id:data.user_id},function(err,user){
		if(err){
			console.log(err);
			return res.status(500).json({error:true,message:"新建文章查找用户失败"})
		}else if(!user){
			return res.status(404).json({message:"找不到当前用户"})
		}
		Article.create({
			title:data.title,
			label:data.label,
			content:data.content,
			_creator:user._id,
		},function(err,article){
			if(err){
				console.log(err);
				return res.status(500).json({error:true,message:"创建文章请求失败"})
			}
			user.articles.push(article._id);
			var user_id = user._id; //需要取出主键_id
      		delete user._id;
			User.update({_id:user_id},user,function(err){
				if(err){
					console.log(err)
					return res.status(500).json({error:true,message:"创建文章更新用户请求失败"})
				}
					console.log("user更新成功")
			});
			console.log('创建文章成功')
			res.json(article)
		})
	})
})

//post请求更新文章
router.post('/api/article/update',function(req,res){

	var data = req.body;
	if(!data.user_id){
		return res.status(403).json({message:"请提供用户id"})
	}else if(!data.title&&!data.label&&!data.content){
		return res.status(400).json({message:"请提供 标题 标签 和 内容 之一"})
	}

	User.findOne({_id:data.user_id},function(err,user){
		if(err){
			console.log(err);
			return res.status(500).json({error:true,message:"新建文章查找用户失败"})
		}else if(!user){
			return res.status(404).json({message:"找不到当前用户"})
		}

		Article.findOne({_id:data.article_id},function(err,article){
			if(err){
				console.log(err);
				return res.status(500).json({error:true,message:"请求更新用户失败"})
			}else if(!article){
				return res.status(404).json({message:"找不到当该文章"})
			}else{
				for(name in data){
					data[name] = name;
				}
				article.update_at = new Date();
				article.save(function(err){
					if(err){
						console.log(err);
						return res.status(500).json({error:true,message:"保存更新用户更新时间失败"})
					}
					res.json({success:true})
				})
			}
		})
	})
})

//删除文章
router.get('/api/article/del',function(req,res){

	var article_id = req.query.article_id;
	if(!req.query.article_id){
		return res.status(400).json({message:"请提供文章id"})
	}

	Article.remove({_id:article_id},function(err,article){
		if(err){
			console.log(err);
			return res.status(500).json({error:true,message:"删除用户请求失败"})
		}else if(!article){
			return res.status(404).json({message:"找不到当该文章"})
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