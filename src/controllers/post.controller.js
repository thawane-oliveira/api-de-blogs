const {
  createPostService,
  getPostsService,
  getPostByIdService,
  editPostService,
  deletePostService,
  searchPostService } = require('../services/post.service');

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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const data = await getPostByIdService(id);

  if (data.message) return res.status(404).json({ message: data.message });
  return res.status(200).json(data);
};

const editPost = async (req, res) => {
  const { id } = req.params;

  const data = await editPostService(id, req.body);

  if (data.message) return res.status(data.status).json({ message: data.message });
  return res.status(200).json(data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const data = await deletePostService(id, req.body);

  if (data.message) return res.status(data.status).json({ message: data.message });
  return res.status(204).end();
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const data = await searchPostService(q);

  return res.status(200).json(data);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
  searchPost,
};