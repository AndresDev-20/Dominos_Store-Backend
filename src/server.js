const app = require('./app');

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ No se pudo conectar a la base de datos:', error.message);
    process.exit(1); // Finaliza el proceso si no hay conexión
  }
}

startServer();