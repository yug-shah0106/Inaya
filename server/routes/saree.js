const express = require('express');
const router = express.Router();
const db = require('../config/database');
const sarees = require('../models/sarees');
const Sequelize = require('sequelize');
const product = require('../models/designs');

product.hasMany(sarees, {foreignKey: 'id'})
sarees.belongsTo(product, {targetKey:'id',foreignKey: 'id'});


router.get('/',(req,res) => sarees.findAll(
  {
    model: product,
    where: req.query  || {},
    limit: (req.query && req.query.limit) || 40,
    page: (req.query && req.query.page) || 0
  }
)
.then( products => {
  res.status(200).send(products)
})
.catch(err => console.log(err)));

router.get('/getOptions',(req,res)=> sarees.findAll({
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
