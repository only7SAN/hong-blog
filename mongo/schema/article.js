var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title : { type:String , require },
	label : { type:String , require , default:"分享" },
	content : { type:String , require },
	_creator : { type:mongoose.Schema.Types.ObjectId , require ,ref:'User'}
})

module.exports = articleSchema;