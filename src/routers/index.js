const express = require('express');
const roleRouter = require('./role.router');
const userRouter = require('./user.router');
const router = express.Router()

// Aca colocare mis rutas del proyecto
router.use("/roles", roleRouter)
router.use('/users', userRouter)


module.exports = router;