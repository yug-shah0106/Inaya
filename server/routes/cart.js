const express = require('express');
const router = express.Router();
const db = require('../config/database');
const cart = require('../models/cart');
const lineItems = require('../models/line_items');

router.post('/add',(req,res) => cart.create(
req.body
).then(user => {
  res.status(200).send(user);
})
.catch(err => console.log(err)));

router.delete('/delete',(req,res) => cart.destroy(
{where:req.body && req.body.filter}
).then(cart => {
  res.status(200).send(cart);
}).catch(err => console.log(err)));

router.put('/update',(req,res) => cart.update(res.body.data,{
    where: req.body && req.body.filter
}).then((cart)=>{
  res.status(200).send(cart);
},(error)=>{
  console.log(error)
}) );

router.get('/',(req,res) => cart.findAll(
  {where:req.body && req.body.filter}
  ).then(cart => {
    res.status(200).send(cart);
  }).catch(err => console.log(err)));

router.get('/checkFromId',(req,res) => cart.findOne(
  {where: req.query}
).then(cart => {
  res.status(200).send(cart);
}).catch(err => console.log(err)));

router.get('/getItems',(req,res) =>{
  cart.findOne({
    where:req.query && req.query.filter
  }).then((success)=>{
    lineItems.findAll(
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
