var router = require('express').Router();
var parser = require('body-parser');
var User = require('./User.model.js');

var mongoose = require('mongoose');
//TODO: put into config
mongoose.connect('mongodb://shzoechen:203252@ds017070.mlab.com:17070/foodtrucks');
var db = mongoose.connection;
//entering sample data
// var user = new User({
// 		name: "Vons",
// 		username: "von",
// 		password: "von",
// 		image: "http",
// 		cuisine: "italy",
// 		location: [1,2]
// });

// user.save(function(err, data) {
// 	if(err) console.log(err);
// 	else {
// 		console.log('success');
// 	}
// });

router.post('/signup', function(request, response) {
	//check if username exists in database
		//if does, err
		//if not, bycrypt password, save into database
})

router.post('login', function(request, response) {
	//check if username exist in database
		//if not, err
		//if does, compare bycrpted password
			//if not same, err
			//if same, passport
})

router.post('profile', function(request, response) {
	//compare every data in database
		//if any change, save it
})


module.exports = router;
