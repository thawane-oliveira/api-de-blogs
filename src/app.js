const express = require('express');
const { createCategory } = require('./controllers/category.controller');
const { login, createUser, getAllUsers, getUserById } = require('./controllers/user.controller');
const { validateBody, validateNewUser, validateToken } = require('./middlewares/validate');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.get('/user', validateToken, getAllUsers);

app.get('/user/:id', validateToken, getUserById);

app.post('/login', validateBody, login);

app.post('/categories', validateToken, createCategory);

app.post('/user', validateNewUser, createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
