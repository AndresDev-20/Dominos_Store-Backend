const express = require('express');
const { getAllCarts, createCart, updateCart, deleteCart } = require('../controllers/car.controllers');


const cartRouter = express.Router();

cartRouter.route('/')
                .get(getAllCarts)
                .post(createCart)
            
cartRouter.route('/:id')
                .put(updateCart)
                .delete(deleteCart);


module.exports = cartRouter;