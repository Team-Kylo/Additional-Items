const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const db = require('../database');

const app = express();

app.use('/', expressStaticGzip('./public', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders(res) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

app.use(express.urlencoded({ extended: true }));


app.get('/additional/:id', (req, res) => {
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

const port = process.env.ADDITIONAL_ITEMS_PORT || 3004;

module.exports = app.listen(port, console.log(`Listening on port ${port}`));
