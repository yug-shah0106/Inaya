const express = require('express');
const router = express.Router();
const db = require('../config/database');
const cart = require('../models/cart');

router.post('/add',(req,res) => cart.create(
req.body
).then(user => {console.log(res.data);
  console.log(res.body);
  console.log(req.data);
    console.log(req.body);
  res.status(200).send(user);
})
.catch(err => console.log(err)));


module.exports = router;
