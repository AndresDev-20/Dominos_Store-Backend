const { DetailCart, Product, Cart } = require('../api/models');
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
    const product = await Product.findOne({ where: { id: data.productId } });
    const cart = await Cart.findOne({ where: { id: data.cartId } });
    const detailExists = await DetailCart.findOne({ where: { productId: data.productId } });
    if(detailExists !== null) return res.status(404).json({error: "Ya el producto esta en el carrito"});
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
    const { amount} = req.body;
    const detail = await DetailCart.findByPk(id, {
        include: { model: Product, as: 'product' }
    });
    const priceAmount = detail.product.price * amount;
    if(!detail) return res.status(404).json({error: "Detalle de carrito no encontrado"});
    const updatedDetail = await detail.update({ amount, price: priceAmount });
    return res.status(200).json({message: "Detalle de carrito actualizado exitosamente", updatedDetail: updatedDetail});
})



// Exportar las funciones
module.exports = {
    getAllCarts,
    getDetailById,
    createDetailCart,
    deleteDetailCart,
    updateDetailCart
}