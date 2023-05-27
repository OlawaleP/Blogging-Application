const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require("cors");
var cookieParser = require("cookie-parser");
const router = express.Router();

const connectDB = require("./config/database.config");

const errorHandler = require("./middleware/error");

//import routes
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

//Database connection
connectDB();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//Port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});

// Routes Middleware
app.use("/", authRoutes);
app.use("/post", postRoutes);

app.use('/.netlify/functions/index', router)

// Error Middleware
app.use(errorHandler);

