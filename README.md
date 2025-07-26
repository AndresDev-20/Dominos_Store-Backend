# 🛒 Dominós Store - Backend 👨‍💻en desarrollo👨‍💻

Backend del sistema de comercio electrónico **"Dominós Store"**, desarrollado con Node.js, Express y Sequelize (con CLI y migraciones). Este backend está diseñado para gestionar usuarios, roles, productos, compras, carritos, direcciones y más.

---

## 🚀 Tecnologías Usadas hasta el momento

- Node.js  
- Express.js  
- MySQL  
- Sequelize CLI  
- bcrypt  
- JWT (Json Web Token)  
- Nodemon  

---

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

---

## 📌 Funcionalidades actuales

- CRUD completo de usuarios  
- CRUD completo de roles  
- CRUD completo de productos  
- Relación: un usuario pertenece a un rol, un rol tiene muchos usuarios  

---

## 🌐 Rutas disponibles hasta el momento

**Ruta base:** `/api/v1`

### 📁 Roles `/api/v1/roles`
- `GET /` → Obtener todos los roles  
- `POST /` → Crear un nuevo rol  
- `PUT /:id` → Actualizar un rol por ID  
- `DELETE /:id` → Eliminar un rol por ID  

### 👤 Usuarios `/api/v1/users`
- `GET /` → Obtener todos los usuarios (sin contraseña)  
- `GET /:id` → Obtener un usuario por ID  
- `POST /` → Crear un nuevo usuario  
- `PUT /:id` → Actualizar un usuario por ID  
- `DELETE /:id` → Eliminar un usuario por ID  

### 🛒 Productos `/api/v1/products`
- `GET /` → Obtener todos los productos  
- `GET /:id` → Obtener un producto por ID  
- `POST /` → Crear un nuevo producto  
- `PUT /:id` → Actualizar un producto por ID  
- `DELETE /:id` → Eliminar un producto por ID  

### 🛒 Carrito `/api/v1/carts`
- `GET /` → Obtener todos los carritos 
- `GET /:id` → Obtener un carro por ID
- `POST /` → Crear un nuevo carro

---

## 📤 Ejemplos de Peticiones

### 🔍 GET /api/v1/users

```json
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
```

### POST /api/v1/roles

```json
{
  "namerole": "cliente"
}
```

## 🧠 Autor

**Yeison Andrés Marroquín Bernal**  
Desarrollador Full Stack - Dominós Store  
Abril - Junio 2025

## 📬 Contacto

- Email: yeisonmarroquin887@email.com  
- Sitio web: https://portafolio-andres-dev.netlify.app/  
- LinkedIn: https://www.linkedin.com/in/yeison-andres-marroqu%C3%ADn-bernal-008138266/

## ✅ Por hacer

- CRUD de productos, carritos y compras  
- Seguridad con JWT  
- Roles y permisos (admin vs cliente)  
- Seeders iniciales (roles, admin)  
- Dockerizar  
- Y mucho más 😼  
