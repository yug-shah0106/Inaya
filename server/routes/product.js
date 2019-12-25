const express = require('express');
const router = express.Router();
const db = require('../config/database');
const product = require('../models/designs');
const Util = require('../Util/util');
const sarees = require('../models/sarees');
const jewellery = require('../models/jewellery');

product.belongsTo(sarees, {targetKey:'id',foreignKey: 'id'});
product.belongsTo(jewellery, {targetKey:'id',foreignKey: 'id'});

router.get('/',(req,res) => product.findAll(
  {
    where: (res.query && res.query.filters) || {},
    limit: (res.query && res.query.limit) || 40,
    page: (res.query && res.query.page) || 0
  }
)
.then( products => {
  res.status(200).send(products)
})
.catch(err => console.log(err)));

router.get('/details',(req,res) => { product.findOne({
  where: req.query
})
.then( products =>{
  let db = Util.getProductTable(products);
  product.findOne({
    where: req.query,
    include: db
  }).then( specificProduct =>{
    res.status(200).send(specificProduct);
  })
}
)
.catch( error =>{
  console.log(error);
  res.status(400).send(error)
});
}
);

module.exports = router;
