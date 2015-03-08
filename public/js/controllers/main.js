angular.module('tweetController', [])

	// inject the tweet service factory into our controller
	.controller('mainController', ['$scope','$http','Tweets', function($scope, $http, Tweets) {
		$scope.formData = {};
		$scope.loading = false;

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.findTweets = function() {

			if($scope.formData.twitterId != undefined){
				$scope.loading = true;
				Tweets.request($scope.formData)
					.success(function(data){
						$scope.loading = false;
						$scope.formData = {};
						$scope.tweets = data;
					})
			}
		};
	}]);