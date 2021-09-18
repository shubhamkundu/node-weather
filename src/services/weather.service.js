const axios = require('axios');
const weatherConfig = require('./../config/config').weather;

module.exports = () => ({
    getWeatherByCityName: (cityName) => new Promise(async (resolve, reject) => {
        try {
            const url = `${weatherConfig.url}/forecast?q=${cityName}&appid=${weatherConfig.apiKey}`;
            try {
                const result = await axios.get(url);
                resolve({ status: 'success', cityName, data: result.data });
            } catch (e) {
                resolve({ status: 'error', cityName, message: e.message });
            }
        } catch (e) {
            return reject({
                statusCode: 500,
                errorMessage: e
            });
        }
    }),

    getWeather: (cityService) => new Promise(async (resolve, reject) => {
        try {
            const cities = await cityService.getAllCities();
            const cityNames = cities.map(c => c.cityName);

            // const cityNames = ['kolkata', 'mumbai1', 'delhi'];

            const url = `${weatherConfig.url}/forecast?appid=${weatherConfig.apiKey}`;
            const promises = [];
            cityNames.forEach(cityName => {
                promises.push(axios.get(`${url}&q=${cityName}`));
            });

            const results = await Promise.allSettled(promises);
            const response = [];
            results.forEach((result, i) => {
                if (result.status === 'fulfilled') {
                    response.push({ status: 'success', cityName: cityNames[i], data: result.value.data });
                } else {
                    response.push({ status: 'error', cityName: cityNames[i], message: result.reason.message });
                }
            });
            resolve(response);
        } catch (e) {
            return reject({
                statusCode: 500,
                errorMessage: e
            });
        }
    })
});