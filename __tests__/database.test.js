// tests that the database functions are writing and reading properly
const { getAllSellerItemsExceptCurrentItem, addManyItems } = require('../database/index');
const mongoose = require('mongoose');
const { generateData } = require('../dummyData/dataSeeder');


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

  const numberOfSellers = 8;
  const numberOfItems = 8;
  const generatedItems = generateData(numberOfSellers, numberOfItems);

  it('should generate 100 items by default', async () => {
    let tempData = generateData();
    expect(tempData.length).toBe(100);
  });

  it(`data generation should generate ${numberOfSellers * numberOfItems} items`, async () => {
    expect(generatedItems.length).toBe(numberOfSellers * numberOfItems);
  });

  it(`should generate ${numberOfItems} unique items for ${numberOfSellers} sellers`, async () => {
    let countOfItemsPerSeller = 0;
    let arrayOfUniqueItems = [];
    let sellerName = generatedItems[0].sellerName;
    let generatedSellerCount = 1;

    for (let i = 0; i < generatedItems.length; i++) {
      if (generatedItems[i].sellerName !== sellerName) {
        expect(countOfItemsPerSeller).toBe(numberOfItems);
        sellerName = generatedItems[i].sellerName;
        generatedSellerCount += 1;
        countOfItemsPerSeller = 0;
        arrayOfUniqueItems = [];
      }

      expect(arrayOfUniqueItems).not.toContain(generatedItems.itemName);
      arrayOfUniqueItems.push(generatedItems[i].itemName);
      countOfItemsPerSeller += 1;
    }
    expect(generatedSellerCount).toBe(numberOfSellers);
  });

  // inserting data into the db.
  it('should insert the generated data into the database', async () => {
    let insertedItems = await addManyItems(generatedItems)
    expect(insertedItems.length).toBe(generatedItems.length);
  });

  it('should return all the items by a seller except the current item', async () => {
    let allExceptCurrent = await getAllSellerItemsExceptCurrentItem(1);
    let arrayOfItemIds = allExceptCurrent.map((item) => (item.itemId));
    expect(arrayOfItemIds).not.toContain(1);
  })
});
