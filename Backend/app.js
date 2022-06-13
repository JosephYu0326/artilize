var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const cors = require('cors')

var indexRouter = require('./routes/index');
// 老師的示範先留著
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
// 路由宣告
const usersRouter = require('./routes/Users/users');
const exhibitionRouter = require('./routes/Exhibition/exhibition');
const bookingRouter = require('./routes/Booking/booking');
const ForumRouter = require('./routes/Forum/Forum');
const ArticleCommentRouter = require('./routes/Forum/ArticleComment');
const ArticleCollectionRouter = require('./routes/Forum/ArticleCollection');
const productRouter = require('./routes/Product/product');
const B2BRouter = require('./routes/B2B/B2B');
const MapSearch = require('./routes/Exhibition/MapSearch')
const NewsLetterRouter = require('./routes/newsLetter');


const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
//http://localhost:5000/categories
app.use('/categories', categoriesRouter);
//http://localhost:5000/products
app.use('/products', productsRouter);

// 專題路由設定
app.use('/users', usersRouter);
app.use('/MapSearch', MapSearch)
app.use('/exhibition', exhibitionRouter);
app.use('/booking', bookingRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/forum', ForumRouter);
app.use('/ArticleComment', ArticleCommentRouter);
app.use('/ArticleCollection', ArticleCollectionRouter);
app.use('/NewsLetter', NewsLetterRouter);
app.use('/B2B', B2BRouter);






// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
