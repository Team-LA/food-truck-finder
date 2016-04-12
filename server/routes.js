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
var user = new User({
		name: "Vons",
		username: "von",
		password: "von",
		image: "http",
		cuisine: "italy",
		locations: [{address: "california", loc: {type: 'points', coordinates: [34.0210418, -118.492224]}, hours: [{1: [8, 17]}]},
		{address: "new york", longitude: 234, latitude: 23, hours: [{ 2: [8, 17]}]}
		]
});

user.save(function(err, data) {
	if(err) console.log(err);
	else {
		console.log('success');
	}
});

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

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

router.post('/profile', helpers.verifyToken, function(request, response) {
	//save updated data in database
	helpers.profile(request, response);
});


router.get('/findTrucks', function(request, response) {
	// var date = request.body.date;
	// var time = request.body.time;
	// var longitude = request.body.longitude;
	// var latitude = request.body.latitude;
	console.log('in findTrucks')
	var trucks = helpers.findTrucksCurrent(request, response);


	var results = {};
	var originalLocation =helpers.findCurrentLocation(request, response)
	for(var i =0; i< trucks.length; i++){
		results[trucks[i].name] = 
	Math.sqrt(Math.pow(Math.abs(originalLocation.latitude-trucks[i].latitude,2) + Math.pow(Math.abs(originalLocation.longitude-trucks[i].longitude,2))))
	}	

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

