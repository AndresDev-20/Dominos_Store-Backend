const express = require('express');
const { getAllImages, createImage } = require('../controllers/image.controllers');
// middleware de multer
const upload = require('../utils/multer');

const imageRouter = express.Router(); 

imageRouter.route('/')
           .get(getAllImages)
           .post(upload.single('image'), createImage);


module.exports = imageRouter;