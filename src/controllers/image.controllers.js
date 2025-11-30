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
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const { path, filename} = req.file;
    const { productId } = req.body;
    const result = await uploadToCloudinary(path, filename);
    if (!result || !result.url) {
        return res.status(500).json({ error: "Cloudinary upload failed" });
    }
    console.log(result)
   // await Image.create(data);
    return res.status(201).json(data);

});

module.exports = {
    getAllImages,
    createImage
};