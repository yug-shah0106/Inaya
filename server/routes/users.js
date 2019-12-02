const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Users = require('../models/Users');

router.get('/',(req,res) => Users.findAll()
.then( user => {console.log(user)
  res.sendStatus(200);
})
.catch(err => console.log(err)));

router.get('/add',(req,res) => {
 const data = {
   name:"test",
   email:"test@gmail.com"
 }

let {name,email} = data;

Users.create({
  name,
  email
})

})

module.exports = router;
