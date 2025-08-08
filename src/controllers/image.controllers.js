const { Image } = require('../api/models');
const catchError = require('../utils/catchError');
const {uploadToCloudinary} = require('../utils/cloudinary')


// Obtener todas las imagenes
const getAllImages = catchError(async(req, res) => {
    const images = await Image.findAll();
    return res.status(200).json(images);
})

// Crear una imagen 
const createImage = catchError(async(req, res) => {
    const { path, filename } = req.file;
    const { url, public_id } = await uploadToCloudinary(path, filename);
    const body = { url, filename: public_id } 
    return res.status(201).json(body);

});

module.exports = {
    getAllImages,
    createImage
};