var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	name: String,
	username: String,
	password: String,
	image: String,
	cuisine: String,
	locations: [{address: String, 
				longitude: Number,
				latitude: Number, 
				hours: [{}]}] //hours:[{Mon: [8, 17]}] 
});

module.exports = mongoose.model('User', UserSchema);