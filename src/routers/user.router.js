const express = require('express');
const { getAllUsers, getUserById, create } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.route('/')
          .get(getAllUsers)
          .post(create)

userRouter.route('/:id')
          .get(getUserById)


module.exports = userRouter;