
const { Category } = require('../api/models')
const catchError = require('../utils/catchError')

// Obtener todos las categorias
const getAllCategories = catchError(async (req, res) => {
    const categories = await Category.findAll();
    return res.status(200).json(categories)
})

// Crear una nueva categoria
const createCategory = catchError(async (req, res) => {
    const data = req.body;
    const addCategory = await Category.create(data);
    return res.status(201).json(addCategory)
})


module.exports = {
    getAllCategories,
    createCategory,
}