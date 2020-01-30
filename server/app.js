const express = require('express');
const db = require('../database');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.get('/:id', (req, res) => {
  // need to sanitize this at some point
  db.getAllSellerItemsExceptCurrentItem(req.params.id)
    .then((allItems) => {
      res.status(200).json(allItems);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
});

module.exports = app;
