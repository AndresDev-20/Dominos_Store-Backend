# 🛒 Dominós Store - Backend

Backend del sistema de comercio electrónico **"Dominós Store"**, desarrollado con Node.js, Express y Sequelize (con CLI y migraciones). Este backend está diseñado para gestionar usuarios, roles, productos, compras, carritos, direcciones y más.

## 🚀 Tecnologías Usadas

- Node.js
- Express.js
- MySQL
- Sequelize CLI
- bcrypt
- Nodemon

## ⚙️ Configuración

1. Clonar el repositorio:  
   `git clone https://github.com/tu-usuario/dominos-store-backend.git`  
2. Instalar dependencias:  
   `npm install`  
3. Configurar la base de datos en `config/config.js`  
4. Crear la base de datos:  
   `npx sequelize db:create`  
5. Ejecutar migraciones:  
   `npx sequelize db:migrate`  
6. Iniciar servidor:  
   `npm run dev`

## 📌 Funcionalidades actuales

- Ver todos los usuarios  
- Ver usuario por ID  
- Crear usuario (con contraseña encriptada)  
- Ver todos los roles  
- Crear, actualizar y eliminar roles  
- Relación: un usuario pertenece a un rol, un rol tiene muchos usuarios  

## 📤 Ejemplos de Peticiones

### GET /api/users

[  
  {  
    "id": 1,  
    "name": "Juan",  
    "email": "juan@mail.com",  
    "role": {  
      "id": 2,  
      "namerole": "admin"  
    }  
  }  
]

### POST /api/roles

{  
  "namerole": "cliente"  
}

## 📄 Diseño de Base de Datos

📁 Ver archivo `Docuemnto 2 - DISEÑO DE LA BASE DE DATOS.pdf` incluido en la raíz del proyecto.

Incluye:
- Diagrama Entidad-Relación (DER)
- Diccionario de datos
- Reglas de integridad (1NF, 2NF, 3NF)
- Relaciones entre entidades
- Modelo de base de datos flexible y escalable

## 🧠 Autor

**Yeison Andrés Marroquín Bernal**  
Desarrollador Backend - Dominós Store  
Abril - Junio 2025

## 📬 Contacto

- Email: andres.dev@email.com  
- LinkedIn: https://www.linkedin.com/in/yeison-andres  

## ✅ Por hacer

- CRUD de productos, carritos y compras  
- Seguridad con JWT  
- Roles y permisos (admin vs cliente)  
- Seeders iniciales (roles, admin)  
- Dockerizar
- Y mucho mas 😼
