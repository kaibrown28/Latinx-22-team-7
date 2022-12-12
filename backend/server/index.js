//------requirements and dependencies---------//
require("dotenv").config()
const express = require("express")
const registerMiddleware = require("../utils/middleware")
const db = require('../views/queries')
const app = express()


//reading .env file
const {PORT = 3000} = process.env

  //listeners
  app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}.`)
})

//--------MIDDLEWARE-------------//
//body parser extracts the entire body portion of an incoming request
registerMiddleware(app)

//write a test message in this response
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })



//setting http requests for a table
// app.get('/request', db.getRequest)
// app.get('/request/:id', db.getRequestById)
// app.post('/request/', db.CreateRequest)
// app.put('/request/:id', db.updateRequest)
// app.delete('/request/:id', db.deleteRequest)