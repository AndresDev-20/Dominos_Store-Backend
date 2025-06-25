const express = require('express');
const { getAllUsers, getUserById, create, update, remove, loggin } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.route('/')
          .get(getAllUsers)
          .post(create)

userRouter.route('/login')
          .post(loggin)

userRouter.route('/:id')
          .get(getUserById)
          .put(update)
          .delete(remove)


module.exports = userRouter;