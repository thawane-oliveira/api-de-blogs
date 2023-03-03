const { tokenGenerate } = require('../aux/token');
const { User } = require('../models');

const loginService = async (email, password) => {
  const data = await User.findOne({ where: { email } });
  console.log(data);
  const token = tokenGenerate({ email, password });
  return token;
};

module.exports = {
  loginService,
};