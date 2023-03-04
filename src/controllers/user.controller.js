const {
  loginService,
  createUserService,
  getUsersService,
  getUserByIdService,
} = require('../services/user.service');

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

const getAllUsers = async (req, res) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const data = await getUserByIdService(id);

  if (data.message) return res.status(404).json({ message: data.message });
  return res.status(200).json(data);
};

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
};