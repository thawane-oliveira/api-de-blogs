const { loginService } = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService(email, password);
  if (result.message) {
    return res.status(400).json(result);
  }
  res.status(200).json(result);
};

module.exports = {
  login,
};