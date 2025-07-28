const express = require('express');
const { getAllCarts, getDetailById, createDetailCart } = require('../controllers/detailcart.controllers');

const detailCartRouter = express.Router();

detailCartRouter.route('/')
                .get(getAllCarts)
                .post(createDetailCart);

detailCartRouter.route('/:id')
                .get(getDetailById);



module.exports = detailCartRouter;