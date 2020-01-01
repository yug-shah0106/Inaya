const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Database
const db = require('./config/database');

db.authenticate().then(()=> console.log('Database connected ....'))
.catch(err => console.log('error while connecting'))

const app = express();

app.get('/',(req,res) => {
res.send('INDEX');
})

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/users', require('./routes/users'));
app.use('/api/products', require('./routes/product'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/products/saree', require('./routes/saree'));
app.use('/api/products/jewellery', require('./routes/jewellery'));
app.use('/api/lineItems', require('./routes/lineItems'));
app.use('/api/productRating', require('./routes/productRating'));
app.use('/api/orders', require('./routes/orders'));
const PORT = 3001;

app.listen(PORT,console.log(`server started at port ${PORT}`));
