const errorHandler = (error, _req, res, _next) => {

  // 🚫 Error de validación (por ejemplo: campos vacíos o formato incorrecto)
  if (error.name === "SequelizeValidationError") {
    const errObj = {};
    error.errors.forEach((er) => {
      errObj[er.path] = er.message;
    });
    return res.status(400).json({ errors: errObj });
  }

  // 🔁 Error de clave única duplicada (por ejemplo: "namerole" ya existe)
  if (error.name === "SequelizeUniqueConstraintError") {
    const errObj = {};
    error.errors.forEach((er) => {
      errObj[er.path] = er.message;
    });
    return res.status(400).json({ errors: errObj });
  }

  // 🔗 Error de clave foránea (relación inválida, por ejemplo: id que no existe)
  if (error.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({
      message: "Error de clave foránea",
      error: error.parent.detail,
    });
  }

  // 🧠 Error de base de datos general (por ejemplo: sintaxis SQL mal escrita)
  if (error.name === "SequelizeDatabaseError") {
    return res.status(400).json({ message: error.message });
  }

  // 🛑 Cualquier otro error que no sea específico
  return res.status(500).json({
    message: error.message || "Error interno del servidor",
    error,
  });
};

module.exports = errorHandler;
