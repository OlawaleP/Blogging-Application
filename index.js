const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser  = require('cookie-parser');

const connectDB = require("./config/database.config");

require('dotenv').config()


//import authorRouter from './routes/authors';


//Database connection
connectDB();

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors);


//Middleware

//app.use('/author', authorRouter);

//Port 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(error.status || 500);
  res.render('error');
});

//export default app;
