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

// actualizar un carrito
const updateCart = catchError(async (req, res) => {
    const { id } = req.params;
    const [updated] = await Cart.update(req.body, { where: { id } });
    if (!updated) {
        return res.status(404).send();
    }
    const updatedCart = await Cart.findByPk(id);
    return res.status(200).json(updatedCart);
});

// eliminar un carrito
const deleteCart = catchError(async (req, res) => {
    const { id } = req.params;
    await Cart.destroy({ where: { id } });
    return res.status(204).send();
});

module.exports = {
    getAllCarts,
    createCart,
    deleteCart,
    updateCart
}