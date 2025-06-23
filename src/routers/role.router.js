const express = require('express');
const { getAllRoles } = require('../controllers/role.controllers');


const roleRouter = express.Router();

roleRouter.route('/')
          .get(getAllRoles)



module.exports = roleRouter;