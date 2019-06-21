const express = require("express");
const app = express();
const port = 5000;
const products = require("../products.json");

//API Functions
const getProducts = require("./getProducts.js");
const getProduct = require("./getProduct.js");

//Send all Products
app.get("/api/products", getProducts);

app.get("/api/product/:id", getProduct);



app.listen(port, () => {
    console.log("Server is Live");
})