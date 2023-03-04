const { Category } = require('../models');

const createCategoryService = async (name) => {
  if (!name) {
    return { message: '"name" is required' };
  }
  const createdCategory = await Category.create({ name });
  console.log(name, 'service', createdCategory);
  return createdCategory;
};

module.exports = { createCategoryService };