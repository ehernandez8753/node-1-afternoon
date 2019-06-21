const express = require("express");
const app = express();
const port = 5000;
const products = require("../products.json");
const getProducts = require("./getProducts.js");

//Send all Products
app.get("/api/products", getProducts);

app.get("/api/products/:id")



app.listen(port, () => {
    console.log("Server is Live");
})