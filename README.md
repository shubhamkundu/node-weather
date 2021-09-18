# node-weather

**Steps followed to develop:**

This app is created using Node.js, express server.<br>
mongoose model is created for city.<br>
mongodb connection is established.<br>
.env is configured.<br>
express server is run.<br>
unhandledRejection and uncaughtExceptions are handled.<br>
route files are created both for cities and weather data.<br>
service files are created both for cities and weather data.<br>
db instance is passed as dependency from index to route to service layer.<br>
lib.js is created to contain the utility functions.<br>
validator.js is created to contain the validation functions.<br>
middleware function is created and used to log API hit data.<br>
Test cases are written using chai, sinon and test environment is configured using mocha.<br>

**Improvements:**

Definitely I will implement caching.<br>
I will write more test cases.<br>
while creating cities, I will add a validation to check whether cityName is valid.<br>
I can implement authentication and authorization.<br>