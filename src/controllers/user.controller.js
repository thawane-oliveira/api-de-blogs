const { loginService, createUserService } = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService(email, password);
  if (result.message) {
    return res.status(400).json(result);
  }
  return res.status(200).json(result);
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const result = await createUserService(newUser);
  if (result.message) {
    return res.status(409).json(result);
  }
  return res.status(201).json(result);
};

module.exports = {
  login,
  createUser,
};