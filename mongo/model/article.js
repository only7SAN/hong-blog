var mongoose = require('mongoose');
var articleSchema = require('../schema/article');

var Article = mongoose.model('Article',articleSchema);

module.exports = Article;