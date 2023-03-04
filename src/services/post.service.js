const { BlogPost, PostCategory, Category, User } = require('../models');

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

const getPostsService = async () => {
  const data = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  if (!data) {
    return { message: 'No posts found' };
  }
  return data;
};

const getPostByIdService = async (id) => {
  const data = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  if (!data) {
    return { message: 'Post does not exist' };
  }
  return data;
};

module.exports = {
  createPostService,
  getPostsService,
  getPostByIdService,
};