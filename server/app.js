var express = require('express');
const connectDB = require('./mongo/db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var sessionsRouter = require('./routes/session');
var profileRouter = require('./routes/profile');
var chatRouter = require('./routes/chat');

var app = express();

connectDB();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/session', sessionsRouter);
app.use('/profile', profileRouter);
app.use('/chat', chatRouter);

module.exports = app;
