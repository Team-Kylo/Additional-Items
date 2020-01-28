const mongoose = require('mongoose');
const { getAllSellerItemsExceptCurrentItem, addManyItems } = require('./index.js');

describe('Database Methods', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
  });

  it('save many items at once', async () => {
    const insertedItems = await addManyItems(testData)
    expect(insertedItems.length).toBe(testData.length);
  });

  it('should return all items except the one given', async () => {
    const returnedItems = await getAllSellerItemsExceptCurrentItem(1);
    const idArray = returnedItems.map((item) => item.itemId);
    expect(idArray).not.toContain(1);

    const returnedItems2 = await getAllSellerItemsExceptCurrentItem(4);
    const idArray2 = returnedItems2.map((item) => item.itemId);
    expect(idArray2).not.toContain(4);
  })
});

const testData = [
  {
    "_id": "5e2f67919e87f1539b9f4f96",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 1,
    "itemName": "Intelligent Cotton Gloves",
    "itemPrice": 813,
    "itemPicture": "https://i.picsum.photos/id/510/300/310.jpg",
    "itemShippingPrice": 19,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f97",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 2,
    "itemName": "Fantastic Soft Towels",
    "itemPrice": 53,
    "itemPicture": "https://i.picsum.photos/id/511/300/310.jpg",
    "itemShippingPrice": 2,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f98",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 4,
    "itemName": "Ergonomic Plastic Towels",
    "itemPrice": 987,
    "itemPicture": "https://i.picsum.photos/id/513/300/310.jpg",
    "itemShippingPrice": 4,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f99",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 4,
    "itemName": "Ergonomic Plastic Towels",
    "itemPrice": 987,
    "itemPicture": "https://i.picsum.photos/id/513/300/310.jpg",
    "itemShippingPrice": 4,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9a",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 5,
    "itemName": "Intelligent Frozen Shoes",
    "itemPrice": 171,
    "itemPicture": "https://i.picsum.photos/id/514/300/310.jpg",
    "itemShippingPrice": 28,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9b",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 6,
    "itemName": "Handmade Concrete Cheese",
    "itemPrice": 14,
    "itemPicture": "https://i.picsum.photos/id/515/300/310.jpg",
    "itemShippingPrice": 12,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9c",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 7,
    "itemName": "Refined Steel Pizza",
    "itemPrice": 536,
    "itemPicture": "https://i.picsum.photos/id/516/300/310.jpg",
    "itemShippingPrice": 13,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9d",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 8,
    "itemName": "Unbranded Cotton Soap",
    "itemPrice": 472,
    "itemPicture": "https://i.picsum.photos/id/517/300/310.jpg",
    "itemShippingPrice": 1,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9e",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 9,
    "itemName": "Handmade Frozen Chips",
    "itemPrice": 211,
    "itemPicture": "https://i.picsum.photos/id/518/300/310.jpg",
    "itemShippingPrice": 16,
    "__v": 0
  },
  {
    "_id": "5e2f67919e87f1539b9f4f9f",
    "sellerName": "Elise47",
    "sellerCountry": "Saint Pierre and Miquelon",
    "sellerTotalSales": 284,
    "sellerJoinDate": "2019-10-21T23:17:39.897Z",
    "sellerPicture": "https://www.placecage.com/300/310",
    "itemId": 10,
    "itemName": "Rustic Wooden Keyboard",
    "itemPrice": 712,
    "itemPicture": "https://i.picsum.photos/id/519/300/310.jpg",
    "itemShippingPrice": 43,
    "__v": 0
  }
];