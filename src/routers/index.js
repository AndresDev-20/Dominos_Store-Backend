const express = require('express');
const roleRouter = require('./role.router');
const router = express.Router()

// Aca colocare mis rutas del proyecto
router.use("/roles", roleRouter)


module.exports = router;