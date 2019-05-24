require('dotenv').config();
const controller = require('./controller')
const express = require('express');
const massive = require('massive')
const app = express()

let {SERVER_PORT,SESSION_SECRET,CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db',db)
  console.log('db connected')
})

app.use(express.json())

app.get('/api/houses',controller.get)
app.post('/api/houses',controller.add)
app.delete('/api/houses/:id',controller.delete)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})