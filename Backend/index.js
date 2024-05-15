/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const propertyRouter = require('./routes/property.routes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use(cookieParser());

/**
 * Server configuration.
 */

const port = process.env.PORT || 3000;

/**
 * Start the server.
 */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/**
 * Connect to the database.
 */
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to database');
    console.log(err);
  });

/**
 * Routes configuration.
 */
app.use('/user', userRouter);
app.use('/property', propertyRouter);

/**
 * Error handling middleware.
 */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

//pre-installation guide yet to be done