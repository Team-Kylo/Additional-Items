require('dotenv').config();
// mongoose set up and connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useUnifiedTopology: true, useNewUrlParser: true });


module.exports.db = mongoose.connection;
