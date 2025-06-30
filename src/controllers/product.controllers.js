const { Product } = require("../api/models");
const catchError = require("../utils/catchError");

const getAllProducts = catchError(async(req, res) => {
    const products = await Product.findAll();
    return products
})


module.exports = {
    getAllProducts
}