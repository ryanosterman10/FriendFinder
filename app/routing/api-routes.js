var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		
		res.json(friends);

	});

	app.post('/api/friends', function(req, res){

		

	})

}