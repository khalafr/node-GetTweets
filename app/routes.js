var Twitter = require('twitter');
var twitterConfig = require('../config/twitterKeys');

//set up Twitter API client with oAuth keys
var client = new Twitter({
	consumer_key: twitterConfig.consumer_key,
	consumer_secret: twitterConfig.consumer_secret,
	access_token_key: twitterConfig.access_token_key,
	access_token_secret: twitterConfig.access_token_secret

});

//private function variable to get tweets by id
var _getTweets = function(id, res){

	var params = { screen_name: id, count: 10};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  		if (!error) {
    		res.json(tweets);
  		}

	});
};
// public get and post functions
module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get tweets for posted username
	app.post('/api/tweets', function(req, res) {
		_getTweets(req.body.twitterId, res);
	});
	//get tweets by passed user id parameter
	app.get('/api/tweets', function(req, res) {
		_getTweets(req.query.user, res);
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};