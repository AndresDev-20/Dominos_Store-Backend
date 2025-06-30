const { Role } = require("../api/models");
const catchError = require("../utils/catchError");


// Ver todos los roles
const getAllRoles = catchError(async(req, res) => {
  const roles = await Role.findAll();
  return res.status(201).json(roles)
})

// Crear un rol
const create = catchError(async(req, res) => {
  let newRole = req.body;
  const addRole = await Role.create(newRole)
  return res.status(201).json({message: "El rol se creo exitosamente", addRole})
})

//Eliminar un rol por id
const remove = catchError(async(req, res) => {
  const { id } = req.params;
  const role = await Role.destroy({where: {id}})
  if(role !== 1) return res.status(404).json({error:"Rol no encontrado"})
  return res.status(204).send()
})

//Actualizar por id
const update = catchError(async(req, res) => {
  const { id } = req.params;
  const data = req.body;
  const roleUpdate = await Role.update(data, {where: {id}})
  if(roleUpdate[0] === 0) return res.status(404).json({error: "El rol no se actualizo porque no existe en la base de datos"})
  return res.json({menssage: "El rol se actualizo exitosamente"});
})




module.exports = {
    getAllRoles,
    create,
    remove,
    update
}