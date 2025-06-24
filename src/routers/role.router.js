const express = require('express');
const { getAllRoles, create } = require('../controllers/role.controllers');


const roleRouter = express.Router();

roleRouter.route('/')
          .get(getAllRoles)
          .post(create)



module.exports = roleRouter;