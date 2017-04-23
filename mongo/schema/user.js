var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userName : { type:String , require },
	password : { type:String , require }
})

userSchema.statics.signUp = function(obj){

	return this.find({userName:obj.userName},function(err,user){
		if(err){console.log("查找出错")};
		if(user.length !== 0){
			console.log("用户已存在");
		}else{
			that.create(obj,function(err,user){
			if(err){console.log("录入用户失败")}
				console.log("录入用户成功：" + user)
			});
		}
	})
}

userSchema.statics.del = function(id){
	//转换为json
	var json = JSON.stringify(id);

	return this.remove({_id:id},function(err,user){
		if(err){console.log("删除失败")};
		console.log("成功删除用户: " + user);
	})
}

userSchema.statics.findByUserId = function(id){
	var json = JSON.stringify(id);
	return this.findOne({_id:id},function(err,user){
		if(err){console.log("失败，没有找到该id用户")}
			console.log("成功找到该用户：" + user)
	})
}

userSchema.statics.findByUserName = function(name){
	var json = JSON.stringify(name);
	return this.find({userName:name},function(err,users){
		if(err){console.log("失败，没有找到该用户名用户")}
			console.log("成功找到该用户：" + users)
	})
}

module.exports = userSchema;