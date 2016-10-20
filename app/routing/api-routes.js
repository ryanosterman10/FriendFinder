var friends = require('../data/friends.js');
// var path = require('path');

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		
		res.json(friends);

	});

	app.post('/api/friends', function(req, res){

		for(var i = 0; i < req.body.scores.length; i++){
			var ints = parseInt(req.body.scores[i]);
			req.body.scores[i] = ints;
		}

		friends.push(req.body);

		var mostCompatible = 0;
		var lowestDif = 40;

		for(var i = 0; i < friends.length - 1; i++){
			var totalDif = 0;
		
			for(var j = 0; j < friends[i].scores.length; j++){
				totalDif += Math.abs(friends[i].scores[j] - req.body.scores[j]);
			}

			if(totalDif < lowestDif){
				mostCompatible = i;
				lowestDif = totalDif;
			}
		}

		res.send(friends[mostCompatible]);
	});

};