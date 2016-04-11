var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	name: String,
	username: String,
	password: String,
	image: String,
	cuisine: String,
	locations: Array 
});

module.exports = mongoose.model('User', UserSchema);	