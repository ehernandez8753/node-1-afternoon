const products = require("../products.json");

//Send specific product

const getProduct = (request, response) => {
    let indexVal = request.params.id;
    if(products.find(product => +product.id === +indexVal)){
        response.send(products[indexVal-1]);
    }
    else{
        response.status(500).send("Item not in list");
    }
}

module.exports = getProduct;