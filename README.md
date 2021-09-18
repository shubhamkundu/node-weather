# node-weather

Steps followed to develop:

This app is created using Node.js, express server.
mongoose model is created for city.
mongodb connection is established.
.env is configured.
express server is run.
unhandledRejection and uncaughtExceptions are handled.
route files are created both for cities and weather data.
service files are created both for cities and weather data.
db instance is passed as dependency from index to route to service layer.
lib.js is created to contain the utility functions.
validator.js is created to contain the validation functions.
middleware function is created and used to log API hit data.
Test cases are written using chai, sinon and test environment is configured using mocha.

Improvements:

Definitely I will implement caching.
I will write more test cases.
while creating cities, I will add a validation to check whether cityName is valid.
I can implement authentication and authorization.