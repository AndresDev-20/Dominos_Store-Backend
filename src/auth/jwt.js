const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "dominos_secret_key";
const EXPIRES = "1h";

// Generar el token
const generateToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: EXPIRES });

//verificamos el token, si el token fue manipulado o venció, devuelve null
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
