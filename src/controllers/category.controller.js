const { createCategoryService, getCategoriesService } = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log(name, 'controller');
  const result = await createCategoryService(name);
  if (result.message) {
    return res.status(400).json(result);
  }
  return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
  const categories = await getCategoriesService();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};