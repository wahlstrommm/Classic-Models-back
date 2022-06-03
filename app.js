var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const productRouter = require('./routes/product');
const officesRouter = require('./routes/offices');
const employeesRouter = require('./routes/employees');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/product', productRouter);
app.use('/offices', officesRouter);
app.use('/employees', employeesRouter);
module.exports = app;

app.locals.con = mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'admin',
  password: 'admin',
  database: 'classicmodels',
});
