const mongoose = require('mongoose');
require('./connection')(mongoose);
require('./city.model')(mongoose);

module.exports = {
    db: mongoose.connection
};