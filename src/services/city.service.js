const { validateCityName } = require('../utils/validator');

module.exports = ({ db }) => ({
    getAllCities: () => new Promise(async (resolve, reject) => {
        try {
            const cities = await db.models.City.find({});
            resolve(cities);
        } catch (e) {
            return reject({
                statusCode: 500,
                errorMessage: e
            });
        }
    }),

    getCityByCityName: (cityName) => new Promise(async (resolve, reject) => {
        try {
            const valid = validateCityName(cityName, 'query');
            if (!valid.ok) {
                return reject({
                    statusCode: 400,
                    errorMessage: valid.reason
                });
            }
            cityName = valid.value;

            const city = await db.models.City.findOne({ cityName });
            if (!city) {
                return reject({
                    statusCode: 404,
                    errorMessage: `City not found for cityName: ${cityName}`
                });
            }
            resolve(city);
        } catch (e) {
            return reject({
                statusCode: 500,
                errorMessage: e
            });
        }
    }),

    createCity: (body) => new Promise(async (resolve, reject) => {
        const now = new Date();
        try {
            const valid = validateCityName(body.cityName, 'body');
            if (!valid.ok) {
                return reject({
                    statusCode: 400,
                    errorMessage: valid.reason
                });
            }
            body.cityName = valid.value;

            const city = await db.models.City.findOne({ cityName: body.cityName });
            if (city) {
                return reject({
                    statusCode: 400,
                    errorMessage: `cityName already exists`
                });
            }

            const cityDoc = {
                cityId: now.getTime(),
                ...copyPropsFromObj(['cityName'], body),
                createdOn: now.toISOString()
            };

            const result = await db.models.City.create(cityDoc);
            resolve({ result });
        } catch (e) {
            return reject({
                statusCode: 500,
                errorMessage: e
            });
        }
    })
});