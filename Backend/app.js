
var express = require("express");
var app = express();
const mongoose = require('mongoose');
var cors = require('cors');
let Product = require('./models/product');
const product = require("./models/product");

mongoose.connect('mongodb+srv://commando01000:Nightbluee001@cluster0.pnq0tcy.mongodb.net/E-Commerce?retryWrites=true&w=majority').then(function(){

        console.log("Conncted to DB")

}).catch(function(err){
        console.log("Failed to Connect to database ! ");
})

app.use(express.json())
app.use(cors())

app.get("/getProducts", function (req, res) {
    //get products
    Product.find().then(function(ProductData){
        console.log(ProductData)
        res.send({
            products:ProductData
        })
    }).catch(function(err){
        console.log('Error Couldnot get the data !');
})
  });

  app.get("/getProducts/:id", function (req, res) {
    var id = req.params.id;
    Product.findOne({_id:id})
      .then(function (singleProduct) {
        console.log(singleProduct);
        res.send({
          product: singleProduct,
        });
      })
      .catch(function (err) {
        console.log("error getting single Product Data");
      });
  });

  app.listen(3002, function () {
    
    console.log("Server Connected Successfully !");
  })