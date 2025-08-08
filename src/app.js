const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routers');
const path = require('path');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); 

//Rutas del proyecto
app.use('/api/v1', router);

//Ruta por defecto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// middlewares después de las rutas
app.use(errorHandler)

module.exports = app;