const { DetailCart } = require('../api/models');
const catchError = require('../utils/catchError');


// Obtener todos los detalles de carrito
const getAllCarts = catchError(async(req, res) => {
    const detail = await DetailCart.findAll();
    return res.status(200).json(detail);
})

// Obtener un detalle de carrito por ID
const getDetailById = catchError(async(req, res) => {
    const { id } = req.params;
    const detail = await DetailCart.findByPk(id);
    if(!detail) return res.status(404).json({error: "Detalle de carrito no encontrado"});
    return res.status(200).json(detail);
})

// Crear un detalle de carrito
const createDetailCart = catchError(async(req, res) => {
    const data = req.body;
    if(!data.cartId || !data.productId || !data.quantity) {
        return res.status(400).json({error: "Faltan datos requeridos para crear el detalle de carrito"});
    }
    const newDetail = await DetailCart.create(data);
    return res.status(201).json({message: "Detalle de carrito creado exitosamente", newDetail: newDetail});
})

module.exports = {
    getAllCarts,
    getDetailById,
    createDetailCart
}