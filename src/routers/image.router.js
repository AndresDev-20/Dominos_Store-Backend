const express = require('express');
const { getAllImages } = require('../controllers/image.controllers');


const imageRouter = express.Router();

imageRouter.route('/')
           .get(getAllImages)


module.exports = imageRouter;