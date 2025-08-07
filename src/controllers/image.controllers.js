const { Image } = require('../api/models');
const catchError = require('../utils/catchError');


// Obtener todas las imagenes
const getAllImages = catchError(async(req, res) => {
    const images = await Image.findAll();
    return res.status(200).json(images);
})

// Crear una imagen 


module.exports = {
    getAllImages
};