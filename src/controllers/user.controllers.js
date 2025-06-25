const { User, Role } = require('../api/models')
const catchError = require('../utils/catchError')
const bcrypt = require('bcrypt')


// viasualizacion de usuarios
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll({
        attributes: {exclude: ["password", "rolId"]},
        include: [{model: Role, as: "role"}]
    });
    return res.json(users);
})

// Filtrado por id
const getUserById = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(
        id,
        {
            attributes: {exclude: ["password", "rolId"]},
            include: [{model: Role, as: "role"}]
        }
    );
    if(!user) return res.status(404).json({error:"El usuario no existe en la base de datos"});
    return res.status(201).json(user)
})

// Crear usuario
const create = catchError(async(req, res) => {
    const {name, email, password, rolId} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)
    const addUser = await User.create({name, email, password: hashedPassword, rolId})
    return res.status(201).json({message: "Usuario registrado", addUser})
})


module.exports = {
    getAllUsers,
    getUserById,
    create
}