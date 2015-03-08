angular.module('tweetService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Tweets', ['$http',function($http) {
		
		return {
			get : function(twitterId) {
				
				return $http.get('/api/tweets', {params:{'user': twitterId}});
			},

			request: function(twitterId){
				return $http.post('/api/tweets', twitterId);
			}
		}


	}]);