const express = require('express');
const db = require('../database');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.get('/:id', (req, res) => {
  console.log(`responding to GET for ${req.params.id}`);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(Number(req.params.id))) {
    res.status(400).json({ error: 'Invalid input type' });
  } else {
    // need to sanitize this at some point
    db.getAllSellerItemsExceptCurrentItem(req.params.id)
      .then((allItems) => {
        res.status(200).json(allItems);
      })
      .catch(() => {
        res.status(404).json({ error: 'That ID does not exist in the database' });
      });
  }
});

const port = process.env.ADDITIONAL_ITEMS_PORT;

module.exports = app.listen(port, console.log(`Listening on port ${port}`));
