const express = require('express');
const router = express.Router();
const db = require('../config/database');
const cart = require('../models/cart');

router.post('/add',(req,res) => cart.create(
req.body
).then(user => {
  res.status(200).send(user);
})
.catch(err => console.log(err)));

router.delete('/delete',(req,res) => cart.destroy(
{where:res.body.filter}
).then(cart => {
  res.status(200).send(cart);
}).catch(err => console.log(err)));

router.put('/update',(req,res) => cart.update(res.body.data,{
    where:res.body.filter
}).then((cart)=>{
  res.status(200).send(cart);
},(error)=>{
  console.log(error)
}) );

module.exports = router;
