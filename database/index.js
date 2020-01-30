// const { db } = require('./db');
const { Item } = require('./schemas.js');

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
      // console.log(filteredSellerItems);
      return filteredSellerItems;
    })
);

module.exports.addManyItems = (arrayOfItems) => (
  Item.insertMany(arrayOfItems)
);
