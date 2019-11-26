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

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/product/:id', db.getProduct)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
