const { DetailCart, Product } = require('../api/models');
const catchError = require('../utils/catchError');


// Obtener todos los detalles de carrito
const getAllCarts = catchError(async(req, res) => {
    const detail = await DetailCart.findAll({include: { model: Product, as: 'product' }});
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
    const product = await DetailCart.findOne({ where: { productId: data.productId } });
    const cart = await DetailCart.findOne({ where: { cartId: data.cartId } });
    if(product == null || cart == null) return res.status(404).json({error: "Producto o carrito no encontrado"});
    const newDetail = await DetailCart.create(data);
    return res.status(201).json({message: "Detalle de carrito creado exitosamente", newDetail: newDetail});
})

// eliminar un detalle de carrito
const deleteDetailCart = catchError(async(req, res) => {
    const { id } = req.params;
    const detail = await DetailCart.findByPk(id);
    if(!detail) return res.status(404).json({error: "Detalle de carrito no encontrado"});
    await detail.destroy();
    return res.status(204).send();
})

// Actualizar un detalle de carrito (no implementado en el router)
const updateDetailCart = catchError(async(req, res) => {
    const { id } = req.params;
    const { amount, price } = req.body;
    const detail = await DetailCart.findByPk(id);
    if(!detail) return res.status(404).json({error: "Detalle de carrito no encontrado"});
    await detail.update({ amount, price });
    return res.status(200).json({message: "Detalle de carrito actualizado exitosamente", updatedDetail: detail});
})



// Exportar las funciones
module.exports = {
    getAllCarts,
    getDetailById,
    createDetailCart,
    deleteDetailCart
}