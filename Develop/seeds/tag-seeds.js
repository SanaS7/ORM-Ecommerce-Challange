const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Jazz music',
  },
  {
    tag_name: 'Folk music',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
