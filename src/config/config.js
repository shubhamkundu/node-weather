const DEFAULT = {
    DB_USERNAME: '',
    DB_PASSWORD: '',
    DB_HOST: '',
    DB_PORT: '',
    DB_DBNAME: '',
    WEATHER_URL: 'http://api.openweathermap.org/data/2.5',
    WEATHER_API_KEY: ''
};

module.exports = {
    db: {
        username: process.env.DB_USERNAME || DEFAULT.DB_USERNAME,
        password: process.env.DB_PASSWORD || DEFAULT.DB_PASSWORD,
        host: process.env.DB_HOST || DEFAULT.DB_HOST,
        port: process.env.DB_PORT || DEFAULT.DB_PORT,
        dbname: process.env.DB_DBNAME || DEFAULT.DB_DBNAME
    },
    validation: {

    },
    weather: {
        url: process.env.WEATHER_URL || DEFAULT.WEATHER_URL,
        apiKey: process.env.WEATHER_API_KEY || DEFAULT.WEATHER_API_KEY
    }
};