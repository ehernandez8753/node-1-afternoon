const products = require("../products.json");

//Send all Products
const getProducts = (request, response) => {
    let matchingProductArr = [];

    if(request.query.price){
        matchingProductArr = products.filter((product) => {
            return product.price >= parseInt(request.query.price);
        })
        response.send(matchingProductArr);
    }else
    {
        response.status(200).send(products);
    }


}

module.exports = getProducts;