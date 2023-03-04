const { createCategoryService } = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log(name, 'controller');
  const result = await createCategoryService(name);
  if (result.message) {
    return res.status(400).json(result);
  }
  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};