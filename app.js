var express = require('express');
var cors = require('cors')
var indexRouter = require('./routes/index');

var app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/email', indexRouter);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

module.exports = app;

  