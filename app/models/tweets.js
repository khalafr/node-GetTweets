var mongoose = require('mongoose');

module.exports = mongoose.model('TwitterHandles', {
	twitterId : {type : String, default: ''}
});