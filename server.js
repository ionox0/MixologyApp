var express  = require('express');
var app      = express();
var http     = require('http');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var uristring =
process.env.MONGOLAB_URI ||
'mongodb://localhost/mydb';

var theport = process.env.PORT || 5000;

app.configure(function() {
	app.use(express.static(__dirname + '/build'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	var session_secret = process.env.OAA_SESSION_SECRET || 'CHANGEMECHANGEMECHANGEMECHANGEME';
	app.use(express.session({secret:session_secret}));
	app.use(express.methodOverride());
});

mongoose.connect(uristring, function(err, res) {
	if(err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Successfully connected to: ' + uristring);
	}
});

// app.configure('development', function() {
// 	app.use(express.errorHandler());
// 	mongoose.connect('mongodb://localhost/mixology-development');
// });

var drinks = require('./api/routes/drinkRoutes');

// Users routes
//app.get('/', users.collection);

app.get('/api/v1/getDrink/:name/:tag', drinks.findById);
app.post('/api/v1/createDrink', drinks.create);

// app.put('/api/v1/users/:id', users.update);
// app.delete('/api/v1/users/:id', users.destroy);

var server = http.createServer(app);
server.listen(5000, function() {
	console.log('App listening on port 5000');
});
