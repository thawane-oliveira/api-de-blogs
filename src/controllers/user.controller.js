const { loginService } = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = loginService(email, password);
  res.status(200).json({ message: result });
};

module.exports = {
  login,
};