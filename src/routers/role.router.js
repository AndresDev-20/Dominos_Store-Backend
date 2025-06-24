const express = require('express');
const { getAllRoles, create, remove, update } = require('../controllers/role.controllers');


const roleRouter = express.Router();

roleRouter.route('/')
          .get(getAllRoles)
          .post(create)

roleRouter.route('/:id')
          .delete(remove)
          .put(update)



module.exports = roleRouter;