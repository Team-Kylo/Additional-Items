// tests that the database functions are writing and reading properly
const { addNewItem, getAllSellerItemsExceptCurrentItem, addManyItems, findOne} = require('../database/index');
const mongoose = require('mongoose');
const { seeder } = require('../dummyData/dataSeeder');

const itemData = {
  itemId: 1,
  itemName: 'Kylo Lightsaber',
  itemPrice: 999.00,
  itemPicture: 'urlToItemPicture',
  itemShippingPrice: 50.00,
  sellerPicture: 'urlToSellerPicture',
  sellerName: 'Kylo-ren',
  sellerCountry: 'United States',
  sellerTotalSales: 400,
  sellerJoinDate: new Date(),
};

describe('', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
  });

  it('should create & save an item successfully', async () => {
    const insertedItem = await addNewItem(itemData);
    const retrievedItem = await findOne(insertedItem.itemId);
    const seededDB = await seeder();

    expect(retrievedItem.itemId).toBe(itemData.itemId);

  });

  // additional tests could include:
  //
});
