//sample data

var helpers = require('./helpers');
var User = require('./User.model.js');
var Q = require("q");


var iniData = [
	{
	 "name": "Cheesy Bizness",
	 "username": "cheesy",
	 "password": "cheesy",
	 "image": "http://arlingtonva.s3.amazonaws.com/wp-content/uploads/sites/25/2013/12/foodtruck.jpeg",
	 "cuisine": "Mediterranean",
	 "locations":[
	     {
	     "latitude": 34.0196705,
     	 "longitude": -118.4802497,
	     "address": "1408 Olympic Blvd Santa Monica, CA 90404", 
	     "hours":{
	         "1": [8,17]
	         }
	     }, 
	     {
	     	"latitude": 34.0300029,
	     	"longitude": -118.4689268,
	     "address": "2700 Pennsylvania Ave Santa Monica, CA 90404",
	     "hours": {
	         "2":[11,20]
	         }
	     }
	 ]
	},
	{
	 "name": "Namaste Cafe",
	 "username": "namaste",
	 "password": "namaste",
	 "image": "http://www.gainesvillegrub.com/wp-content/uploads/2015/04/West-Side-Food-Trucks_Full_20008.jpg",
	 "cuisine": "French",
	 "locations":[
	     {
	     	"latitude": 34.0019939,
	     	"longitude": -118.4838825,
	     "address": "2612 Main St Santa Monica, CA 90405", 
	     "hours":{
	         "1": [8,17]
	         }
	     }, 
	     {
	     	"latitude": 34.0300029,
	     	"longitude": -118.4689268,
	     "address": "2700 Pennsylvania Ave Santa Monica, CA 90404",
	     "hours": {
	         "3":[9,20]
	         }
	     }
	 ]
	},
	{
	 "name": "Calbi Truck",
	 "username": "calbi",
	 "password": "calbi",
	 "image": "http://www.adweek.com/files/imagecache/node-detail/news_article/fea-food-truck-hed-2012.jpg",
	 "cuisine": "Thai",
	 "locations":[
	     {
	     	"latitude": 34.0002554,
	     	"longitude": -118.4821436,
	     "address": "2728 Main St Santa Monica, CA 90405", 
	     "hours":{
	         "1": [10,22]
	         }
	     }, 
	     {
	     	"latitude": 34.0300029,
	     	"longitude": -118.4689268,
	     "address": "2700 Pennsylvania Ave Santa Monica, CA 90404",
	     "hours": {
	         "2":[11,20]
	         }
	     }
	 ]
	}
];

var saveInitData = function() {


			var index = 0;
			helpers.promiseWhile(function () { return index < iniData.length; }, function () {
				var user = new User(iniData[index]);
				user.save(function(err, data) {
					if(err) console.log(err);
					else {
						console.log('success');
					}
				});
				index++;
				return Q.delay(300); 
			}).done();	
}


module.exports = saveInitData;