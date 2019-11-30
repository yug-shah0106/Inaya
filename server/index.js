const express = require('express')
const bodyParser = require('body-parser')
const db = require('./query')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)


app.get('/api/product/:id', db.getProduct)
app.get('/api/productListing', db.getAllProduct)
app.get('/api/productListing/:id', db.getSpecificProduct)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
