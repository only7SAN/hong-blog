var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
	username : { type:String , require },
	password : { type:String , require },
	avatar_url: { type:String , require },
	create_date: { type: Date, default: Date.now },
	articles : [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
})

userSchema.statics.signUp = function(obj,cb){
	var that = this;

	return this.find({username:obj.username},function(err,user){
		if(err){
			console.log("查找出错")
		}else if(user.length !== 0){
			console.log("用户已存在");
		}else{
			bcrypt.genSalt(10, function(err, salt) {
			    bcrypt.hash(obj.password, salt, function(err, hash) {
			        // Store hash in your password DB.
			        if(err){
			        	console.log("生成hash失败")
			        }else{
				        obj.password = hash;
				        console.log(obj)
					    that.create(obj,function(err,user){
							if(err){
								console.log("录入用户失败")
							}else{
								console.log("录入用户成功");
								cb();
							}
						});
					}
			    });
			});
		}
	})
}

userSchema.statics.signIn = function(obj,cb){

	return this.findOne({username:obj.username},function(err,user){
		if(err){console.log("用户查找出错")};
		let hash = user.password;
		console.log(obj)
		console.log(user.password)
		bcrypt.compare(obj.password, hash, function(err, result) {
		    // res == true
		    if(err){console.log("比较密码出错")};
		    if(result == true){
		    	cb(user);
		    }
		});
	})
}

module.exports = userSchema;