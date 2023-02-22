

const mongoose = require('mongoose');
let productSchema = mongoose.Schema({
    ProductName:String,
    ProductPrice:Number,
    ProductDescription:String,
    ProductCategory:String,
    Qty:Number,
    rating:Number,
    brand:String,
    discountPercentage:Number,
    ProductImg:String
})

module.exports = mongoose.model('Product',productSchema)