const { createPostService, getPostsService } = require('../services/post.service');

const createPost = async (req, res) => {
  const { title, content, userToken, categoryIds } = req.body;
  const result = await createPostService({ title, content, userId: userToken.id }, categoryIds);
  if (result.message) {
    return res.status(400).json(result);
  }
  return res.status(201).json(result);
};

const getAllPosts = async (_req, res) => {
  const posts = await getPostsService();
  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  getAllPosts,
};