const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemId: Number,
  itemName: String,
  itemPrice: Number,
  itemPicture: String,
  itemFreeShipping: Number,
  sellerPicture: String,
  sellerName: String,
  sellerCountry: String,
  sellerTotalSales: Number,
  sellerJoinDate: Date,
  sellerStarRating: Number,
  sellerReviewCount: Number,
});

module.exports.Item = mongoose.model('Item', itemSchema);
