const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../controllers/user.controller');
const { validateToken, validateEmail, validateNewUser } = require('../middlewares/validate');

const userRouter = express.Router();

userRouter.get('/', validateToken, getAllUsers);

userRouter.post('/', validateEmail, validateNewUser, createUser);

userRouter.get('/:id', validateToken, getUserById);

module.exports = {
  userRouter,
};
