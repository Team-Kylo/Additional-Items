const { db } = require('./db');
const { Item } = require('./Schemas.js');

// error handling or notification when the database connects
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to the db'));


module.exports.addNewItem = (newItem) => {
  const itemToBeAdded = new Item({
    itemId: newItem.itemId,
    itemName: newItem.itemName,
    itemPrice: newItem.itemPrice,
    itemPicture: newItem.itemPicture,
    itemShippingPrice: newItem.itemShippingPrice,
    sellerPicture: newItem.sellerPicture,
    sellerName: newItem.sellerName,
    sellerCountry: newItem.sellerCountry,
    sellerTotalSales: newItem.sellerTotalSales,
    sellerJoinDate: newItem.sellerJoinDate,
  });

  return itemToBeAdded.save();
};

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

module.exports.findOne = (idOfItem) => (
  Item.find({ itemId: idOfItem })
    .then((arrayOfItems) => (
      arrayOfItems[0]
    ))
);

module.exports.addManyItems = (arrayOfItems) => (
  Item.insertMany(arrayOfItems)
);
