const express = require('express');
const router = express.Router();
const db = require('../config/database');
const product = require('../models/product');

router.get('/',(req,res) => product.findAll(
  {
    where:res.query.filters || {},
    limit: res.query.limit || 40,
    page: res.query.page || 0
  }
)
.then( user => {console.log(user)
  res.sendStatus(200);
})
.catch(err => console.log(err)));

router.get('/details',(req,res) => { product.findOne({
  where: res.query
})
.then( products =>
  res.status(200).send(products)
)
.catch( error =>{
  console.log(error);
  res.status(400).send(error)
});
}
);

module.exports = router;
