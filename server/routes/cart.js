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
{where:res.body && res.body.filter}
).then(cart => {
  res.status(200).send(cart);
}).catch(err => console.log(err)));

router.put('/update',(req,res) => cart.update(res.body.data,{
    where: res.body && res.body.filter
}).then((cart)=>{
  res.status(200).send(cart);
},(error)=>{
  console.log(error)
}) );

router.get('/',(req,res) => cart.findAll(
  {where:res.body && res.body.filter}
  ).then(cart => {
    res.status(200).send(cart);
  }).catch(err => console.log(err)));

router.get('/checkFromId',(req,res) => cart.findOne(
  {where:res.query && res.query.filter}
).then(cart => {
  res.status(200).send(cart);
}).catch(err => console.log(err)));

router.get('/getItems',(req,res) =>{
  cart.findOne({
    where:res.query && res.query.filter
  }).then((success)=>{
    lineItems.findOne(
      {where:{cart_id:success.id}
    }).then((lineItems)=>{
      res.status(200).send(lineItems);
    },(err)=>{
      console.log(err)
    })
  },(error)=>{
    console.log("Thrown exception while getting cart_id from lineItems");
  })
} );

module.exports = router;
