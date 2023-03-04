const { tokenValidate } = require('../aux/token');

const validateBody = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateNewUser = (req, res, next) => {
  const { email, password, displayName } = req.body;

  // if (!displayName || !password || !email) {
  //   return res.status(400).json({ message: 'bugou' });
  // }

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  const regex = /^\S+@\S+\.\S+$/;

  if (!email.match(regex)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = tokenValidate(authorization);
    req.body.userToken = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateBody,
  validateNewUser,
  validateToken,
};