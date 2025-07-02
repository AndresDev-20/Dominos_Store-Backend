const express = require('express');
const { getAllProducts, create, getProductById, update, remove } = require('../controllers/product.controllers');

const productRouter = express.Router();

productRouter.route('/')
             .get(getAllProducts)
             .post(create)

productRouter.route('/:id')
             .get(getProductById)
             .put(update)
             .delete(remove)

             
module.exports = productRouter;