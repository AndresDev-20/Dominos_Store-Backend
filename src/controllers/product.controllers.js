const { where } = require("sequelize");
const { Product } = require("../api/models");
const catchError = require("../utils/catchError");


// Visualizacion de todos los productos
const getAllProducts = catchError(async(req, res) => {
    const products = await Product.findAll();
    return res.status(201).json(products)
})

// Filtrar producto por id
const getProductById = catchError(async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id)
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


module.exports = {
    getAllProducts,
    getProductById,
    create,
    update
}