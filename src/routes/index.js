module.exports = ({ db }) => ({
    weatherRouter: require('./weather.router')({ db }),
    cityRouter: require('./city.router')({ db })
});