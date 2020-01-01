const express = require('express');
const router = express.Router();
const db = require('../config/database');
const product = require('../models/designs');
const Util = require('../Util/util');
const sarees = require('../models/sarees');
const jewellery = require('../models/jewellery');

product.belongsTo(sarees, {targetKey:'id',foreignKey: 'id'});
product.belongsTo(jewellery, {targetKey:'id',foreignKey: 'id'});

router.get('/',(req,res) => {
let filters = JSON.parse(req.query.filters);
  product.findAll({
    where: (filters) || {},
    limit: (req.query && req.query.limit) || 40,
    page: (req.query && req.query.page) || 0
  }
)
.then( products => {
  res.status(200).send(products)
})
.catch(err => console.log(err))
});

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

router.get('/listing',(req,res) => {
let db = Util.getProductTable(req.query);
let filter = JSON.parse(req.query.filters);
  product.findAll({
    include:[{
        model: db,
        where : filter,
        required:true
      }],
      required:true
  }).then( specificProduct =>{
    res.status(200).send(specificProduct);
  })
.catch( error =>{
  console.log(error);
  res.status(400).send(error)
});
});


module.exports = router;
