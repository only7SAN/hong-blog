var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username : { type:String , require },
	password : { type:String , require },
	avatar_url: { type:String , require },
	create_at: { type: Date, default: Date.now },
	articles : [{type: mongoose.Schema.Types.ObjectId, ref: 'Article'}]
})

module.exports = userSchema;