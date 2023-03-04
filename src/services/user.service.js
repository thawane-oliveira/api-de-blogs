const { tokenGenerate } = require('../aux/token');
const { User } = require('../models');

const loginService = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });
  if (!data) {
    return { message: 'Invalid fields' };
  }
  const token = tokenGenerate({ email, id: data.dataValues.id });
  return { token };
};

const createUserService = async (newUser) => {
  const { email } = newUser;
  const findInDB = await User.findOne({ where: { email } });
  if (findInDB) {
    return { message: 'User already registered' };
  }
   const insertUser = await User.create(newUser);
  // if (insertUser) {
    const token = tokenGenerate({ email, id: insertUser.dataValues.id });
    return { token };
  // } 
};

const getUsersService = async () => {
  const data = await User.findAll({ attributes: { exclude: ['password'] } }); // verificado como excluir field em https://stackoverflow.com/questions/31679838/sequelizejs-findall-exclude-field
  if (!data) {
    return { message: 'Deu ruim' };
  }
  return data;
};

const getUserByIdService = async (id) => {
  const data = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!data) {
    return { message: 'User does not exist' };
  }
  return data;
};

module.exports = {
  loginService,
  createUserService,
  getUsersService,
  getUserByIdService,
};