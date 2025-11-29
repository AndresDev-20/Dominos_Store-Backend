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
    const { path, filename} = req.file;
    const { productId } = req.body;
    const { url, public_id } = await uploadToCloudinary(path, filename);
    const data = { url, publicId: public_id, altText: public_id, productId: parseInt(productId) }; 
    console.log(public_id)
   // await Image.create(data);
    return res.status(201).json(data);

});

module.exports = {
    getAllImages,
    createImage
};