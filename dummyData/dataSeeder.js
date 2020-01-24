/*
Generates fake data for 10 sellers with 10 items each.  Can be modified on line 41 to adjust these numbers.
*/
const faker = require('faker');
const Schemas = require('../database/Schemas.js');
require('dotenv').config();

// I chose this route because it is actually less code then trying to connect to my current database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true}).
  catch((error) => {
    console.error(error);
  })

const db = mongoose.connection;

// error handling or notification when the database connects
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to the db`));


const addNewItem = (newItem) => {

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
}


const databaseSeeder = (numOfSellers = 10, numOfItemsPerSeller = 10) => {

  let k = 1;
  // needs to start at 10 for the url for the pictures to take up 2 slots
  let i = 10;
  let arrayOfFakeData = [];

  // create a while loop for the seller
  while ( i < numOfSellers + 10 ) {

    // get fake data for seller
    let generatedSellerInfo = {
      sellerName: faker.internet.userName(),
      sellerCountry: faker.address.country(),
      sellerTotalSales: Math.floor(Math.random() * 500),
      sellerJoinDate: faker.date.past(),
      sellerPicture: `https://www.placecage.com/300/3${i}`,
    };

    // needs to start at 10 for the url for the pictures
    let j = 10;

    // while loop for the items
    while( j < numOfItemsPerSeller + 10) {
      let generatedItemInfo ={};

      // makes a copy of the seller as to not reference the same obj in memory
      for (let key in generatedSellerInfo) {
        generatedItemInfo[key] = generatedSellerInfo[key];
      }

      // generatedItemInfo = generatedSellerInfo;
      // data for individual items
      generatedItemInfo.itemId =  k;
      generatedItemInfo.itemName = faker.commerce.productName();
      generatedItemInfo.itemPrice = faker.commerce.price();
      generatedItemInfo.itemPicture = `https://i.picsum.photos/id/5${j}/300/3${i}.jpg`;
      generatedItemInfo.itemShippingPrice = Math.floor(Math.random() * 50);

      arrayOfFakeData.push(generatedItemInfo);
      // increment j by one
      j++;
      // increment k by one
      k++;
    }

    i++;
  };

  Schemas.Item.insertMany(arrayOfFakeData).
    then(() => {
      console.log('Seeding was successful to the Kylo Database with Items Documents!')
      // exits the node process
      process.exit();
    }).
    catch((error) => {
      // console logs the error then excess the node process
      console.error('Seeding the data had the following error:', error);
      process.exit();
    })
};

databaseSeeder();