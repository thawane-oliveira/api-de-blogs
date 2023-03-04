const express = require('express');
const { createCategory, getAllCategories } = require('./controllers/category.controller');
const {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
deletePost } = require('./controllers/post.controller');
const {
  login,
  createUser,
  getAllUsers,
  getUserById } = require('./controllers/user.controller');
const {
  validateBody,
  validateNewUser,
  validateToken,
  validateEmail, 
  validateNewPost, 
  validateCategories } = require('./middlewares/validate');
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

app.get('/post', validateToken, getAllPosts);

app.get('/post/:id', validateToken, getPostById);

app.post('/login', validateBody, login);

app.post('/categories', validateToken, createCategory);

app.post('/post', validateToken, validateNewPost, validateCategories, createPost);

app.post('/user', validateEmail, validateNewUser, createUser);

app.delete('/post/:id', validateToken, deletePost);

app.put('/post/:id', validateToken, editPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
