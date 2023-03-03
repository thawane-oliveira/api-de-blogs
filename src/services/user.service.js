const { tokenGenerate } = require('../aux/token');
const { User } = require('../models');

const loginService = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });
  if (!data) {
    return { message: 'Invalid fields' };
  }
  const token = tokenGenerate({ email, password });
  return { token };
};

module.exports = {
  loginService,
};