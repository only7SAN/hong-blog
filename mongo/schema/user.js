var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	userName : { type:String , require },
	password : { type:String , require }
})

module.exports = userSchema;