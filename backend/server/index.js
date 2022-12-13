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
