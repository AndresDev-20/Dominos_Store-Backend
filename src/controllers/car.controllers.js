const { Cart } = require('../api/models');
const catchError = require('../utils/catchError');

// Obtener todos los carritos
const getAllCarts = catchError(async (req, res) => {
    const carts = await Cart.findAll();
    return res.status(200).json(carts);
});

// crear un carrito
const createCart = catchError(async (req, res) => {
    const newCart = await Cart.create(req.body);
    return res.status(201).json(newCart);
});

module.exports = {
    getAllCarts,
    createCart,
}