const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routers');
require('dotenv').config();

// Esta es nuestra aplicación
const app = express();

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());


app.use('/api/v1', router);
app.get('/', (req, res) => {
    res.send('¡Hola, mundo! Esta es nuestra API de ejemplo.');
})

module.exports = app;