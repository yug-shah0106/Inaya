const express = require('express');
const router = express.Router();
const db = require('../config/database');
const lineItems = require('../models/line_items');

router.post('/add',(req,res) => lineItems.create(
req.body
).then(user => {
  res.status(200).send(user);
})
.catch(err => console.log(err)));

router.delete('/delete',(req,res) => lineItems.destroy(
{where:res.body && res.body.filter}
).then(lineItems => {
  res.status(200).send(lineItems);
}).catch(err => console.log(err)));

router.put('/update',(req,res) => lineItems.update(res.body.data,{
    where: res.body && res.body.filter
}).then((lineItems)=>{
  res.status(200).send(lineItems);
},(error)=>{
  console.log(error)
}) );

router.get('/',(req,res) => lineItems.findAll(
  {where:res.body && res.body.filter}
  ).then(lineItems => {
    res.status(200).send(lineItems);
  }).catch(err => console.log(err)));


module.exports = router;
