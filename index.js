 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser');

var notesController = require('./controllers/notesController');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 // set port
 app.listen(3001, function () {
     console.log('Node app is running on port 3001');
 });

 app.use('/notes',notesController);



 module.exports = app;
