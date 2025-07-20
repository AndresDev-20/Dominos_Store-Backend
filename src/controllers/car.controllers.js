const { Cart } = require('../api/models');
const catchError = require('../utils/catchError');

// Obtener todos los carritos
const getAllCarts = catchError(async (req, res) => {
    const carts = await Cart.findAll();
    return res.status(200).json(carts);
});



module.exports = {
    getAllCarts,
}