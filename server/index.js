require('dotenv').config();
const controller = require('./controller')
const express = require('express');
const massive = require('massive')
const app = express()
const port = 5056

let {SERVER_PORT,SESSION_SECRET,CONNECTION_STRING} = process.env;

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db',db)
  console.log('db connected')
})

app.listen(port, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})