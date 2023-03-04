const express = require('express');
const { getAllCategories, createCategory } = require('../controllers/category.controller');
const { validateToken } = require('../middlewares/validate');

const categoryRouter = express.Router();

categoryRouter.get('/', validateToken, getAllCategories);

categoryRouter.post('/', validateToken, createCategory);

module.exports = { categoryRouter };