const { Product, Image } = require("../api/models");
const catchError = require("../utils/catchError");


// Visualizacion de todos los productos
const getAllProducts = catchError(async(req, res) => {
    const products = await Product.findAll({ include: [ { model: Image, as: 'images' } ] });
    return res.status(201).json(products)
})

// Filtrar producto por id
const getProductById = catchError(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id, { include: [ { model: Image, as: 'images' } ] })
    return res.status(201).json(product)
})

// Creación de un producto
const create = catchError(async(req, res) => {
    const data = req.body;
    const addProduct = await Product.create(data)
    return res.status(201).json({meesage: "Producto creado", addProduct})
})

// Actualizacion de producto por id
const update = catchError(async(req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updateProduct = await Product.update(data, {where: {id}})
    if(updateProduct[0] !== 1) return res.status(404).json({Error: "Producto no encontrado"});
    return res.status(200).json({message: "Producto actualizado exitosamente"})
})

//Eliminar produto 
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.destroy({where: {id}})
    if(deleteProduct !== 1) return res.status(404).json({Error: "Producto no encontrado"});
    return res.status(204).send()
})


module.exports = {
    getAllProducts,
    getProductById,
    create,
    update,
    remove
}