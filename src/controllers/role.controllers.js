const { Role } = require("../api/models");
const catchError = require("../utils/catchError");



const getAllRoles = catchError(async(req, res) => {
  const roles = await Role.findAll();
  return res.json(roles)
})


const create = catchError(async(req, res) => {
  let newRole = req.body;
  const addRole = await Role.create(newRole)
  return res.json({message: "El rol se creo exitosamente", addRole})
})


module.exports = {
    getAllRoles,
    create
}