const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerate = (payload) => jwt.sign(payload, JWT_SECRET, {
  expiresIn: '1h',
});

const tokenValidate = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  tokenGenerate,
  tokenValidate,
};