const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'T-Shirts',
  },
  {
    category_name: 'Jeans-Shorts',
  },
  {
    category_name: 'Indie-Music',
  },
  {
    category_name: 'Fedora-Hats',
  },
  {
    category_name: 'Formal-Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
