const { tokenGenerate } = require('../aux/token');
const { User } = require('../models');

const loginService = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });
  if (!data) {
    return { message: 'Invalid fields' };
  }
  const token = tokenGenerate({ email });
  return { token };
};

const createUserService = async (newUser) => {
  const { email } = newUser;
  const findInDB = await User.findOne({ where: { email } });
  if (findInDB) {
    return { message: 'User already registered' };
  }
  /* const insertUser =  */await User.create(newUser);
  // if (insertUser) {
    const token = tokenGenerate({ email });
    return { token };
  // } 
};

module.exports = {
  loginService,
  createUserService,
};