// connecting .env file to process.env
require('dotenv').config();

// import dependencies
const express = require('express');
const cors = require('cors');

// import local dependencies
require('./utils/error-handler');
const { db } = require('./db');
const { weatherRouter, cityRouter } = require('./routes')({ db });
const { requestLog } = require('./middlewares');

// initialize express app
const app = express();

// use middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use generic middlewares
app.use(requestLog);

// use router middlewares
app.use('/weather', weatherRouter);
app.use('/city', cityRouter);

// run server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(new Date());
    console.log(`node-weather server is listening on port: ${port}`);
});