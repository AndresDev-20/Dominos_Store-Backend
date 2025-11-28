
const { Category } = require('../api/models')
const catchError = require('../utils/catchError')

// Obtener todos las categorias
const getAllCategories = catchError(async (req, res) => {
    const categories = await Category.findAll();
    return res.status(200).json(categories)
})

module.exports = {
    getAllCategories,
}