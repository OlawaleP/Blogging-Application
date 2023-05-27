const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');
var cookieParser  = require('cookie-parser');


const connectDB = require("./config/database.config");


const errorHandler = require('./middleware/error');

//import routes
const authorRoutes = require('./routes/authorRoutes');
const authRoutes = require('./routes/authRoutes');


//import authorRouter from './routes/authors';


//Database connection
connectDB();


// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//Middleware



//Port 
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
})

// Routes Middleware
app.use('/', authRoutes);

// Error Middleware
app.use(errorHandler);


// catch 404 and forward to error handler


// error handler



//export default app;
