const express = require('express');
const router = express.Router();
const db = require('../config/database');
const sarees = require('../models/sarees');
const Sequelize = require('sequelize');
const product = require('../models/designs');
const productRatings = require('../models/product_ratings');

product.hasMany(sarees, {foreignKey: 'id'})
sarees.belongsTo(product, {targetKey:'id',foreignKey: 'id'});


router.get('/',(req,res) => sarees.findAll(
  {
    model: product,
    where: req.query  || {},
    limit: (req.query && req.query.limit) || 20,
    page: (req.query && req.query.page) || 0
  }
)
.then( products => {
  res.status(200).send(products)
})
.catch(err => console.log(err)));

router.post('/add',async (req,res) => productRatings.create(
  req.body
  ).then(res => {
    console.log(res);
    res.status(200).send(res);
  })
  .catch(err => console.log(err)));

module.exports = router;
