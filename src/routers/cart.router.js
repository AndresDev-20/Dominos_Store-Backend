const express = require('express');
const { getAllCarts } = require('../controllers/car.controllers');


const cartRouter = express.Router();

cartRouter.route('/')
                .get(getAllCarts)


module.exports = cartRouter;