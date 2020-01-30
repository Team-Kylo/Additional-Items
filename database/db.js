require('dotenv').config();
// mongoose set up and connection
const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// error handling or notification when the database connects
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to the db'));


module.exports.db = db;
