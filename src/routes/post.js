const express = require('express');
const {
  getAllPosts,
  createPost,
  getPostById,
  deletePost,
  editPost } = require('../controllers/post.controller');
const { validateToken, validateNewPost, validateCategories } = require('../middlewares/validate');

const postRouter = express.Router();

postRouter.get('/', validateToken, getAllPosts);

postRouter.post('/', validateToken, validateNewPost, validateCategories, createPost);

postRouter.get('/:id', validateToken, getPostById);

postRouter.delete('/:id', validateToken, deletePost);

postRouter.put('/:id', validateToken, editPost);

module.exports = {
  postRouter,
};
