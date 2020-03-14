var express = require('express');
var cors = require('cors')

var app = express();
app.use(cors())
const fileUpload = require('express-fileupload');

app.use(fileUpload());
// Parse json data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/email', indexRouter);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

module.exports = app;

  