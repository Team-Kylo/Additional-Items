// tests that the database functions are writing and reading properly
const { getAllSellerItemsExceptCurrentItem, addManyItems } = require('../database/index');
const mongoose = require('mongoose');
const { databaseSeeder } = require('../dummyData/dataSeeder');


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

  it('data generation should create 100 items', async () => {
    const generatedItems = databaseSeeder();

    expect(generatedItems.length).toBe(100);
  });

  // additional tests could include:
  //
});
