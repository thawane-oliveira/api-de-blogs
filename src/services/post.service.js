const { BlogPost, PostCategory, Category } = require('../models');

const findCategory = async (ctg) => {
  const data = await Promise.all(ctg.map((id) => Category.findByPk(id)));
  return data;
};

const createPostService = async (newPost, categories) => {
  const verifyCategories = await findCategory(categories);
  const findNull = verifyCategories.some((ctg) => ctg === null);

  if (!verifyCategories.length || findNull) {
    return { message: 'one or more "categoryIds" not found' };
  }

  const data = await BlogPost.create(newPost);
  const { id, title, content, userId, createdAt: published, updatedAt: updated } = data;

  await Promise.all(categories.map((ctg) => PostCategory.create({ postId: id, categoryId: ctg })));

  return { id, title, content, userId, updated, published };
};

module.exports = {
  createPostService,
};