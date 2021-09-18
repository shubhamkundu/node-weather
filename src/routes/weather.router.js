const express = require('express');
const weatherRouter = express.Router();
const { handleAPIError } = require('../utils/lib');

module.exports = ({ db }) => {
    const { weatherService, cityService } = require('../services')({ db });

    weatherRouter.get('/test', (req, res) => {
        res.send('Weather test passed');
    });

    weatherRouter.get('/', (req, res) => {
        const getWeatherPromise = !!req.query.cityName ?
            weatherService.getWeatherByCityName(req.query.cityName) :
            weatherService.getWeather(cityService);
        getWeatherPromise
            .then(response => {
                res.send(response);
            })
            .catch(handleAPIError.bind(null, req, res));
    });

    return weatherRouter;
};