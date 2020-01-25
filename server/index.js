// this is where my app will start
const express = require('express');
require('dotenv').config();
const db = require('../database');

const app = express();
const port = process.env.ADDITIONAL_ITEMS_PORT || 3004;

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));

app.get('/:id', (req, res) => {
  // need to sanitize this at some point
  db.getAllSellerItemsExceptCurrentItem(req.params.id).
    then((allItems) => {
      res.status(200).json(allItems);
    }).
    catch((error) => {
      res.status(500).json(error);
    });
});


app.listen(port, console.log(`Listening on port ${port}`));
