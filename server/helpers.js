var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var User = require('./User.model.js');
var jwt = require('jwt-simple');


module.exports.userSignup = function(username, password, response) {

	User.findOne({username: username}, function(err, user) {
		if(err) {
			console.error('error', err);
			response.status(500).send("Server error.")
		} else {
			//if user does not exists
			if(user === null) {
				var hash = bcrypt.hashSync(password);
				var user = new User({
					username: username,
					password: hash
				});

				user.save(function(err, user) {
					if(err) {
						console.error('error', err);
						response.status(500).send("Server error.")

					} else {
						response.status(201).send("User added.");
					}
				})
			} else {
				response.status(409).send("User exists.");
			}

		}
	})

};

module.exports.userLogin = function(username, password, response) {

	User.findOne({username: username}, function(err, user) {
		if(err) {
			console.error('error', err);
			response.status(500).send("Server error.")
		} else {
			//if user does exist 
			if(user) {
				//if password matches
				bcrypt.compare(password, user.password, function(err, result) {
				  if (err) {
				    console.error(err);
				    response.status(500).send('Server error.');
				  } else if (result) {
				    // Log user in
				    console.log('user.id', user.id)
				    createToken(response, user.id);
				  } else {
				    // Password mismatch
				    response.status(401).send("Wrong password.");
				  }
				});
			} else {
				response.status(401).send("User does not exist.");
			}
		}
	})
};

module.exports.profile = function(request, response) {

	var id = request.id;
	var name = request.body.name;
	var cuisine = request.body.cuisine;
	var locations = request.body.locations;
	//find the user in database
	User.findById(id, function (err, user) {
	  if (err) {
	  	response.status(500).send("Server error.")
	  } else {
		  user.name = name;
		  user.cuisine = cuisine;
		  user.locations = locations;

		  user.save(function (err) {
		    if (err) {
		    	response.status(500).send("Server error about database.")
		    } else {
		    	response.status(201).send(user);
		    }
		  });
	  }
	  
	});
};

module.exports.findTrucksCurrent = function(request, response) {
	var date = new Date();
	var day = date.getDay();
	var time = date.getHours();
	var trucksCurrent = [];

	User.find({}, function(err, users) {
		if(err) {
			console.error('err', err); 
		} else {
			//looping through all the users
			for(var i = 0; i < users.length; i++) {
				//looping through all the locations of every user
				for(var j = 0; j < users[i].locations.length; j++) {
					//if user is working today
					if(users[i].locations[j].hours[day]) {
						//if user is working within current hour
						if(users[i].locations[j].hours[day][0] <= time && users[i].locations[j].hours[day][1] >= time) {
							trucksCurrent.push(users[i]);
						}

					}
				}
			}

				console.log('trucksCurrent', trucksCurrent)

		}
	})

	return trucksCurrent;
}

module.exports.createToken = createToken = function(response, id) {

	var payload = {id: id};
	//TODO in config.js
	var secret = "mksgreenfieldproject";
	var token = jwt.encode(payload, secret);

	response.set('token', token).status(201).json({token: token});
};

module.exports.verifyToken = verifyToken = function(request, response, next) {

	var secret = "mksgreenfieldproject";
	var token = (request.body && request.body.access_token) || (request.query && request.query.access_token) || request.headers['x-access-token'];

	if(token) {
    	var decodedToken = jwt.decode(token, secret);
    	var id = decodedToken.id;
    	request.id = id;
    	next();
	} else {
		response.status(401).send("Not authorized.")
	}
};

