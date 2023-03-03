const express = require('express');
const { login, createUser } = require('./controllers/user.controller');
const { validateBody, validateNewUser } = require('./middlewares/validate');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', validateBody, login);

app.post('/user', validateNewUser, createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
