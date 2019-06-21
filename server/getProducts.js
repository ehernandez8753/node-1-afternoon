const products = require("../products.json");

//Send all Products
const getProducts = (request, response) => {
    response.status(200).send(products);

}

module.exports = getProducts;