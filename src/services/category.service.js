const { Category } = require('../models');

const createCategoryService = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

const getCategoriesService = async () => {
  const data = await Category.findAll();
  if (!data) {
    return { message: 'Deu ruim' };
  }
  return data;
};

module.exports = {
  createCategoryService,
  getCategoriesService,
};