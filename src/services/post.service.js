const { BlogPost, PostCategory } = require('../models');

const createPostService = async (newPost, categories) => {
  const data = await BlogPost.create(newPost);

  const { id, title, content, userId, createdAt: published, updatedAt: updated } = data;

  await Promise.all(categories.map((ctg) => PostCategory.create({ postId: id, categoryId: ctg })));

  return { id, title, content, userId, updated, published };
};

module.exports = { createPostService };