var express = require('express');
var app = express();

//Express-Middleware (executed on every Request)
app.use(function (req, res, next) {
	res.header('challenge', 12345);
	if(req.header('solution') == 12345)
		next();
	else
		res.end("Not authorized!");
});

app.get('/', function(req, res){
	res.send('We are connected!');
});

app.listen(3000);