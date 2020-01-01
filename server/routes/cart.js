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

router.delete('/delete',(req,res) =>{
  console.log(req.body);
  lineItems.destroy({where:req.body && req.body.filter}).then(() => {
  res.status(200).send();
}).catch(err => console.log(err))
});

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
  let filters = JSON.parse(req.query.filter);
  cart.findOne({
    where:filters
  }).then((success)=>{
    let cart_id = success.get({
        plain: true // Important
      });
    lineItems.findAll(
      {where:{cart_id:cart_id.id}
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
