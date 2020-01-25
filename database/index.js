require('dotenv').config();
// mongoose set up and connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true}).
  catch((error) => {
    console.error(error);
  })
const db = mongoose.connection;

// error handling or notification when the database connects
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to the db`));

// schema for item
const Schemas = require('./Schemas.js');


module.exports.addNewItem = (newItem) => {

  let itemToBeAdded = new Schemas.Item({
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

module.exports.getAllSellerItemsExceptCurrentItem = (idOfItem) => {
  return (
    Schemas.Item.find({itemId: idOfItem}).
      then((itemInformation) => {
        return Schemas.Item.find({sellerName: itemInformation[0].sellerName})
      }).
      then((allSellerItems) => {
        // removing the original item from the returned array
        let filteredSellerItems = allSellerItems.filter((item) => ( item.itemId !== Number(idOfItem) ));
        return filteredSellerItems;
      })
  )
}

module.exports.addManyItems = (arrayOfItems) => {
  return Schemas.Item.insertMany(arrayOfItems);
}
