var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title : { type:String , require },
	label : { type:String , require , default:"分享" },
	content : { type:String , require },
	_creator : { type:mongoose.Schema.Types.ObjectId , require ,ref:'User'}
})

articleSchema.statics.newArticle = function(obj,cb){
	//转换为json
	var json = JSON.stringify(obj);
	return this.create(json,function(err,article){
		if(err){console.log("创建文章失败")};
		console.log("创建文章成功" + article)
	})
}

articleSchema.statics.del = function(id){
	//转换为json
	var json = JSON.stringify(id);

	return this.remove({_id:id},function(err,article){
		if(err){console.log("删除失败")};
		console.log("成功删除文章: " + article);
	})
}


articleSchema.statics.findByArticleId = function(id){
	var json = JSON.stringify(id);
	return this.find({_id:id},function(err,article){
		if(err){console.log("失败，没有找到该id文章")}
			console.log("成功找到该文章: " + article)
	})
}

articleSchema.statics.findByArticleName = function(title){
	var json = JSON.stringify(title);
	return this.find({title:title},function(err,articles){
		if(err){console.log("失败，没有找到该标题文章")}
			console.log("成功找到文章：" + articles)
	})
}

module.exports = articleSchema;