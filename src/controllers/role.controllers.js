const { Role } = require("../api/models");

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll()
    return res.json(roles)
  } catch (error) {
    console.error("Error fetching roles", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const create = async (req, res) => {
  const data = req.body;
  try {
    const newRole = await Role.create(data)
    return res.json(newRole)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}


module.exports = {
    getAllRoles,
    create
}