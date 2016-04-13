var express = require('express');
var router = require('express').Router();
var parser = require('body-parser');
var User = require('./User.model.js'); 
var helpers = require('./helpers.js');

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
// 		//locations: []
// });

// user.locations.push({address: "san diago", longitude: 34.0210418, latitude: -118.492224, hours: {1: [15, 17]} });
// user.locations.push({address: "san fransico", longitude: 234, latitude: 23, hours: { 2: [15, 17]} });

// user.save(function(err, data) {
// 	if(err) console.log(err);
// 	else {
// 		console.log('success');
// 	}
// });

//TODO: WHY?
// router.get('/', function(req, res) {
//   res.send('Birds home page');
// });

router.post('/signup', function(request, response) {

	var username = request.body.username;
	var password = request.body.password;
	//check if both username and password are filled in.
	if(username !== null && password !== null) {
		//if username exists in database
		helpers.userSignup(username, password,response);		
	} else {
		response.status(400).send("username and password have to be filled in.");
	}
});

router.post('/login', function(request, response) {

	var username = request.body.username;
	var password = request.body.password; 
	//check if both username and password are filled in.
	if(username !== null && password !== null) {
		//if username exists in database
		helpers.userLogin(username, password,response);		
	} else {
		response.status(400).send("Username and password have to be filled in.");
	}
});

router.post('/profile', function(request, response) {
	//save updated data in database
	helpers.profile(request, response);
});


router.post('/findTrucks', function(request, response) {

	helpers.findTrucks(request, response);
});

router.get('/logout', function(request, response) {
  request.session.destroy(function(){
    response.sendStatus(200);
  });
});

router.get('*', function(request, response) {
	response.redirect('/');
});


module.exports = router;

