const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {

  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if(!dbCatData) {
        // Return a 404 response if no categories are found

        res.status(404).json({message: 'No categories found'});
        return;
      }
        // Return the category data

      res.json(dbCatData);
    })
    .catch(err => {
      // handle error
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  // Find a category by ID of products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(dbCatData => {
      if (!dbCatData) {
        // Return a 404 response if no categories are found
        res.status(404).json({ message: 'No categories found' });
        return;
      }
      // Return the category data
      res.json(dbCatData);
    })
    .catch(err => {
      // Handle any errors
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  // Create category
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCatData => {
      // Return the created category data
      res.json(dbCatData);
    })
    .catch(err => {
      // Handle any errors
      console.log(err);
      res.status(500).json(err);
    });
});



router.put('/:id', (req, res) => {
  // Update a category with ID
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData[0]) {
        // Return a 404 response if no category is found with the given ID
        res.status(404).json({ message: 'No category found with this ID' });
        return;
      }
      // Return the updated category data
      res.json(dbCatData);
    })
    .catch(err => {
      // Handle any errors
      console.log(err);
      res.status(500).json(err);
    });
});



router.delete('/:id', (req, res) => {
  // Delete a category with ID
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCatData => {
      if (!dbCatData) {
        // Return a 404 response if no category is found with the given ID
        res.status(404).json({ message: 'No category found with that ID' });
        return;
      }
      // Return the deleted category data
      res.json(dbCatData);
    })
    .catch(err => {
      // Handle any errors
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
