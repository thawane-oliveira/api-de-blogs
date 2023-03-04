const express = require('express');
const { categoryRouter } = require('./routes/categories');
const { loginRouter } = require('./routes/login');
const { postRouter } = require('./routes/post');
const { userRouter } = require('./routes/user');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', userRouter);

app.use('/post', postRouter);

app.use('/categories', categoryRouter);

app.use('/login', loginRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
