require('dotenv').config()
var mongoose = require('mongoose');
var url = process.env.MONGO_URI;
mongoose.set('debug', true);
mongoose.connect(url, {useNewUrlParser: true});
// mongoose.connect('mongodb://127.0.0.1:27017');
// mongoose.connect('mongodb://arbhassan:slimrapper13@ds047666.mlab.com:47666/node-api', {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo")