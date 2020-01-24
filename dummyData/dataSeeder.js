const Picsum = require('picsum-photos');
const faker = require('faker');
const fetch = require('node-fetch');
require('dotenv').config();

// I chose this route because it is actually less code then trying to connect to my current database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;


const databaseSeeder = (numOfSellers = 10, numOfItemsPerSeller = 8) => {
  // let i = 0;


  // create a while loop for the seller
  // while ( i < numOfSellers ) {
    // get fake data for seller

    // sellerPicture: faker.avatar,

    let generatedNewItemInfo = {
      sellerName: faker.internet.userName(),
      sellerCountry: faker.address.country(),
      sellerTotalSales: Math.floor(Math.random * 500),
      sellerJoinDate: faker.date.past(),
    };

    // wait for the picture url to be grabbed
    fetch('https://www.placecage.com/200/202').
      then((sellerPicture) => {
      console.log("done");
      return sellerPicture.blob();
      });
      // then(image => )


      // generatedNewItemInfo.sellerPicture = sellerPictureURL;
      // console.log(generatedNewItemInfo);

      // let j = 0
      // // while loop for the items
      // while(j < numOfItemsPerSeller) {
      //   // some for items

      //   // get fake picture url
      //     // one for seller
      //     // one for item



      //   // send the object to the database
      //     // have a catch block for errors

      //   // increment i by one

      //   i++;

      // }


  // };
};

const addNewItem = (newItem) => {

  let itemToBeAdded = new Item({
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
}


databaseSeeder();