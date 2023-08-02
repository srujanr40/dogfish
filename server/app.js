var express = require('express');
const connectDB = require('./mongo/db');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
var indexRouter = require('./routes/index');
var sessionsRouter = require('./routes/session');
var profileRouter = require('./routes/profile');
var chatRouter = require('./routes/chat');
var authRouter = require('./routes/auth');


var app = express();

connectDB();

const corsOptions = {
    origin: process.env.FRONTEND_URL,
}

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/session', sessionsRouter);
app.use('/profile', profileRouter);
app.use('/chat', chatRouter);
app.use('/auth', authRouter);
  

module.exports = app;
