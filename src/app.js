import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import scoreRouter from "./score/score.routes.js";
import helloRouter from "./hello/hello.routes.js";
import authRouter from "./auth/auth.routes.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;


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
app.use('/api/hello', helloRouter);
app.use('/api/score', scoreRouter);

export default app;
