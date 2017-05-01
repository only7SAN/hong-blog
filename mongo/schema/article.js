var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title : { type:String , require },
	label : { type:String , require , default:"share" },
	content : { type:String , require },
	create_date: { type: Date, default: Date.now },
	_creator : { type:mongoose.Schema.Types.ObjectId , require ,ref:'User' }
})

module.exports = articleSchema;