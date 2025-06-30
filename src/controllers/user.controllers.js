const { User, Role } = require('../api/models')
const { generateToken } = require('../auth/jwt')
const catchError = require('../utils/catchError')
const bcrypt = require('bcrypt')


// viasualizacion de usuarios
const getAllUsers = catchError(async(req, res) => {
    const users = await User.findAll({
        attributes: {exclude: ["password", "rolId"]},
        include: [{model: Role, as: "role"}]
    });
    return res.status(201).json(users);
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

// Actualizar usuario
const update = catchError(async(req, res) => {
    const {name, email, password, rolId} = req.body;
    const {id} = req.params;
    const hashedPassword = await bcrypt.hash(password, 10)
    const updateUser = await User.update(
        {name, email, password: hashedPassword, rolId},
        {where: {id}}
    )
    if(updateUser[0] !== 1) return res.status(404).json({error:"El usuario no existe en la base de datos"});
    return res.status(200).json({message: "Usuario actualizado exitosamente"})
})

// Eliminar un usuario por id
const remove = catchError(async(req, res) => {
    const {id} = req.params;
    const userDelete = await User.destroy({where: {id}})
    if(userDelete !== 1) return res.status(404).json({Error: "El usuario no existe por ende no se ha eliminado"});
    return res.status(204).send()
})

// logear un usuario y generar el token para los permisos
const loggin = catchError(async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        where: {email},
        include: [{model: Role, as: "role"}]
    });
    if(!user) return res.status(404).json({error: "El usuario no existe en la base de datos"});
    const verifyPassword = await bcrypt.compare(password, user.password)
    if(!verifyPassword) return res.status(404).json({message: "Contraseña incorrecta"});
    const payload = {
        id: user.id,
        role: user.role.namerole
    }
    const token = generateToken(payload)
    return res.status(200).json({
        message: "Login exitoso",
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role.namerole,
        }
    })
})

module.exports = {
    getAllUsers,
    getUserById,
    create,
    update,
    remove,
    loggin
}