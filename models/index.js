require('dotenv').config()
var mongoose = require('mongoose');
var url = process.env.MONGO_URI;
mongoose.set('debug', true);
mongoose.connect(url, {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo")