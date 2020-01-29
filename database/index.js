const { db } = require('./db');
const { Item } = require('./schemas.js');

// error handling or notification when the database connects
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to the db'));

module.exports.getAllSellerItemsExceptCurrentItem = (idOfItem) => (
  Item.find({ itemId: idOfItem })
    .then((itemInformation) => (
      Item.find({ sellerName: itemInformation[0].sellerName })
    ))
    .then((allSellerItems) => {
      // removing the original item from the returned array
      const filteredSellerItems = allSellerItems.filter((item) => (
        item.itemId !== Number(idOfItem)
      ));
      return filteredSellerItems;
    })
);

module.exports.addManyItems = (arrayOfItems) => (
  Item.insertMany(arrayOfItems)
);
