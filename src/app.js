const express = require('express');
const { createCategory, getAllCategories } = require('./controllers/category.controller');
const { createPost } = require('./controllers/post.controller');
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

app.get('/categories', validateToken, getAllCategories);

app.post('/login', validateBody, login);

app.post('/categories', validateToken, createCategory);

app.post('/post', validateToken, createPost);

app.post('/user', validateNewUser, createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
