const validationConfig = require('./../config/config').validation;
const { } = require('./../utils/lib');

module.exports = {
    validateCityName: (cityName, location) => {
        if (!cityName || typeof cityName !== 'string') {
            return {
                ok: false,
                reason: `Please provide string value for cityName in request ${location}`
            }
        }
        cityName = cityName.trim();
        if (cityName === '') {
            return {
                ok: false,
                reason: `cityName in request  ${location} should not be empty`
            }
        }
        return {
            ok: true,
            value: cityName
        };
    }
};