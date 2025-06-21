const { default: open } = require('open');
const { sequelize } = require('./api/models');
const app = require('./app');

const PORT = process.env.PORT || 8080;
const URL = `http://localhost:${PORT}`

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${URL}`);
    });
  } catch (error) {
    console.error('❌ No se pudo conectar a la base de datos:', error.message);
    process.exit(1); // Finaliza el proceso si no hay conexión
  }
}

startServer();