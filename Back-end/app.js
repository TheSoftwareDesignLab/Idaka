var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var dalaiRouter = require('./routes/dalai');
var usersRouter = require('./routes/users');
var practicesRouter = require('./routes/practices');
var queriesRouter = require('./routes/queries');
var stagesRouter =require('./routes/stages');
var synonymsRouter =require('./routes/synonyms') ;
var tasksWithPracticesRouter =require('./routes/tasksWithPractices') ;
 
var app = express();
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(express.static(path.join(__dirname, '../my-app/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/practices', practicesRouter);
app.use('/queries', queriesRouter); 
app.use('/stages', stagesRouter); 
app.use('/synonyms', synonymsRouter); 
app.use('/dalai', dalaiRouter); 
app.use('/tasksWithPractices', tasksWithPracticesRouter); 

app.options('*', function (req,res) { res.sendStatus(200); });
/**/

module.exports = app;
