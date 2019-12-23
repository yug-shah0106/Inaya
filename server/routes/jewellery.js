const express = require('express');
const router = express.Router();
const db = require('../config/database');
const jewellery = require('../models/jewellery');
const Sequelize = require('sequelize');

router.get('/',(req,res) => jewellery.findAll(
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

router.get('/getOptions',(req,res)=> jewellery.findAll({
    attributes: [
        // specify an array where the first element is the SQL function and the second is the alias
        [Sequelize.fn('DISTINCT', Sequelize.col(req.query.column)) ,req.query.column],

        // specify any additional columns, e.g. country_code
        // 'country_code'

    ]
}).then((products) => {
  res.status(200).send(products)
},(error)=>{
  console.log(error);
}));
// router.get('/details',(req,res) => { product.findOne({
//   where: res.query
// })
// .then( products =>
//   res.status(200).send(products)
// )
// .catch( error =>{
//   console.log(error);
//   res.status(400).send(error)
// });
// }
// );

module.exports = router;
