const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const scoreRouter = require("./routes/score-routes");
const authRouter = require("./routes/auth-routes");

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../process.env') })
const MONGO_URI = process.env.MONGO_URI

const app = express();


// MongoDB connection

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB at URI', MONGO_URI);
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


// Body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Authorization, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});


// call API routes

app.use('/api/auth', authRouter);
app.use('/api/score', scoreRouter);

module.exports = app;
