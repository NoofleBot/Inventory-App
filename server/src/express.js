const cors = require('cors')
const express = require('express')
const knex = require('knex')(require('../knexfile.js')['development'])
const app = express()
const port = 5172

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`)
})

//GET
app.get('/', (request, response) => {
  response.send('Express server is running')
})

app.get('/items', (request, response) => {
  knex('item')
    .select('*')
    .then(data => {
      var items = data.map(item => item)
      response.json(items);
    })
})

app.get('/items/:id', (request, response) => {
  var { id } = request.params;
  knex('item')
    .where({ id })
    .then(item => {
        response.json(item);
    })
});

app.get('/users', (request, response) => {
  knex('users')
  .select('*')
  .then(data => {
    var users = data.map(user => user)
    response.json(users);
  })
})

//POST
app.post('/items', (request, response) => {
  var {userId, itemName, itemDescription, itemQuantity} = request.body
  knex('item')
    .insert({
      user_id: userId,
      item_name: itemName,
      description: itemDescription,
      quantity: itemQuantity
    })
    .then(() => {
      response.status(201).json({message: `User #${userId} added ${itemQuantity} ${itemName} with description ${itemDescription}`})
    })
    .catch(err => {
      response.status(500).json({message: 'Error creating new item', error: err})
    })
})

app.post('/users', (request, response) => {
  var {firstName, lastName, username, password} = request.body
  knex('users')
    .insert({
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: password
    })
    .then(() => {
      response.status(201).json({message: `User ${firstName} ${lastName} added with username ${username} and password ${password}`})
    })
    .catch(err => {
      response.status(500).json({message: 'Error creating new user', error: err})
    })
})

