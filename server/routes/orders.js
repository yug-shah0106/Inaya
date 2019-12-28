const express = require('express');
const router = express.Router();
const db = require('../config/database');
const orders = require('../models/orders');

router.get('/',(req,res) => Users.findAll()
.then( user => {
  res.sendStatus(200);
})
.catch(err => console.log(err)));

router.post('/add',(req,res) => orders.create(
req.body
).then(user => {
  res.status(200).send(user);
})
.catch(err => console.log(err)));

module.exports = router;
