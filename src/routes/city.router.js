const express = require('express');
const cityRouter = express.Router();
const { handleAPIError } = require('../utils/lib');

module.exports = ({ db }) => {
    const { cityService } = require('../services')({ db });

    cityRouter.get('/test', (req, res) => {
        res.send('City test passed');
    });

    // cityRouter.get('/', (req, res) => {
    //     cityService.getAllCities()
    //         .then(response => {
    //             res.send(response);
    //         })
    //         .catch(handleAPIError.bind(null, req, res));
    // });

    // cityRouter.get('/by-city-name', (req, res) => {
    //     cityService.getCityByCityName(req.query.cityName)
    //         .then(response => {
    //             res.send(response);
    //         })
    //         .catch(handleAPIError.bind(null, req, res));
    // });

    cityRouter.post('/', (req, res) => {
        cityService.createCity(req.body)
            .then(response => {
                res.send(response);
            })
            .catch(handleAPIError.bind(null, req, res));
    });

    return cityRouter;
};