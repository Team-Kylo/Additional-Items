require('dotenv').config();
// mongoose set up and connection
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => {
    console.error(error);
  });

module.exports.db = mongoose.connection;
