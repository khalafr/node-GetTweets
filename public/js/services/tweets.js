angular.module('tweetService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Tweets', ['$http',function($http) {
		
		return {
			get : function() {
				
				return $http.get('/api/tweets');
			},

			request: function(twitterId){
				return $http.post('/api/tweets', twitterId);
			}
		}


	}]);