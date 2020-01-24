// this is where my app will start
const express = require('express');
require('dotenv').config();
const db = require('../database');

const app = express();
const port = process.env.ADDITIONAL_ITEMS_PORT || 3004;

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));


app.listen(port, console.log(`Listening on port ${port}`));
