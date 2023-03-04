const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteMyUser } = require('../controllers/user.controller');
const { validateToken, validateEmail, validateNewUser } = require('../middlewares/validate');

const userRouter = express.Router();

userRouter.get('/', validateToken, getAllUsers);

userRouter.post('/', validateEmail, validateNewUser, createUser);

userRouter.delete('/me', validateToken, deleteMyUser);

userRouter.get('/:id', validateToken, getUserById);

module.exports = {
  userRouter,
};
