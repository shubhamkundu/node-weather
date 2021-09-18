module.exports = ({ db }) => ({
    weatherService: require('./weather.service')(),
    cityService: require('./city.service')({ db })
});