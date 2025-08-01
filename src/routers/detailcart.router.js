const express = require('express');
const { getAllCarts, getDetailById, createDetailCart, deleteDetailCart } = require('../controllers/detailcart.controllers');

const detailCartRouter = express.Router();

detailCartRouter.route('/')
                .get(getAllCarts)
                .post(createDetailCart);

detailCartRouter.route('/:id')
                .get(getDetailById)
                .delete(deleteDetailCart);



module.exports = detailCartRouter;