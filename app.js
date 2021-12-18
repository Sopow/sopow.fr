var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path')
require('dotenv').config({path: 'config/.env'})

var indexRouter = require('./routes/index');
var githubRouter = require('./routes/github')
var githubrepositoryRouter = require('./routes/githubrepository')
var mailRouter = require('./routes/mail')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/github', githubRouter)
app.use('/githubrepository', githubrepositoryRouter)
app.use('/mail', mailRouter)

setTimeout(() => {
console.log(`[WEB] Website is ready on port, http://localhost:${process.env.PORT}`) 
}, 2000)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;