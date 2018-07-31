var path = require('path');

// ROUTING
// ===============================================================================

module.exports = function(app){

	// HTML GET Requests
	// The user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Catch All. If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};