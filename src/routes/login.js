const express = require('express');
const { login } = require('../controllers/user.controller');
const { validateBody } = require('../middlewares/validate');

const loginRouter = express.Router();

loginRouter.post('/', validateBody, login);

module.exports = {
  loginRouter,
};
