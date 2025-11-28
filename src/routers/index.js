const express = require('express');
const roleRouter = require('./role.router');
const userRouter = require('./user.router');
const productRouter = require('./product.router');
const cartRouter = require('./cart.router');
const detailCartRouter = require('./detailcart.router');
const imageRouter = require('./image.router');
const categoryRouter = require('./category.router');
const router = express.Router()

// Aca colocare mis rutas del proyecto
router.use("/roles", roleRouter)
router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/images', imageRouter)
router.use('/carts', cartRouter)
router.use('/detailcarts', detailCartRouter)


module.exports = router;