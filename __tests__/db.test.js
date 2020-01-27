// should test that the db functions can write, read, and pull out the proper information.
const mongoose = require('mongoose');
const {Item} = require('../database/Schemas');
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

describe('Item Model Test', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
  });

  it('create & save user successfully', async () => {
    const validItem = new Item(itemData);
    const savedItem = await validItem.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(savedItem.itemId).toBeDefined();
    expect(savedItem.itemName).toBe(itemData.itemName);
    expect(savedItem.itemPrice).toBe(itemData.itemPrice);
    expect(savedItem.itemPicture).toBe(itemData.itemPicture);
    expect(savedItem.itemShippingPrice).toBe(itemData.itemShippingPrice);
  });
});
