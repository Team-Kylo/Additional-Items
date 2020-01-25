/*
Generates fake data for 10 sellers with 10 items each.  Can be modified on line 41 to adjust.
*/
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const db = require('../database');

const databaseSeeder = (numOfSellers = 10, numOfItemsPerSeller = 10) => {
  const arrayOfFakeData = [];
  let k = 1;
  // needs to start at 10 for the url for the pictures to take up 2 slots
  let i = 10;

  // create a while loop for the seller
  while (i < numOfSellers + 10) {
    // get fake data for seller
    const generatedSellerInfo = {
      sellerName: faker.internet.userName(),
      sellerCountry: faker.address.country(),
      sellerTotalSales: Math.floor(Math.random() * 500),
      sellerJoinDate: faker.date.past(),
      sellerPicture: `https://www.placecage.com/300/3${i}`,
    };

    // needs to start at 10 for the url for the pictures to take up 2 slots
    let j = 10;

    // while loop for the items
    while (j < numOfItemsPerSeller + 10) {
      const generatedItemInfo = {};

      // makes a copy of the seller as to not reference the same obj in memory
      Object.entries(generatedSellerInfo).forEach(([key, value]) => {
        generatedItemInfo[key] = value;
      });

      // data for individual items
      generatedItemInfo.itemId = k;
      generatedItemInfo.itemName = faker.commerce.productName();
      generatedItemInfo.itemPrice = faker.commerce.price();
      generatedItemInfo.itemPicture = `https://i.picsum.photos/id/5${j}/300/3${i}.jpg`;
      generatedItemInfo.itemShippingPrice = Math.floor(Math.random() * 50);

      arrayOfFakeData.push(generatedItemInfo);

      j += 1;
      k += 1;
    }

    i += 1;
  }

  db.addManyItems(arrayOfFakeData)
    .then(() => {
      console.log('Seeding was successful to the Kylo Database with Items Documents!');
      // exits the node process
      process.exit();
    })
    .catch((error) => {
      // console logs the error then excess the node process
      console.error('Seeding the data had the following error:', error);
      process.exit();
    });
};

databaseSeeder();
