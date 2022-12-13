//------requirements and dependencies---------//

const express = require('express')
const bodyParser = require('body-parser')
const db = require('../views/queries')
const app = express()
const cors = require('cors')

//redux dependencies
// const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const config = require('./webpack.config')

//variables
const port = 3000

  //listeners
  app.listen(port, () => {
    console.log(`The app is listening on port ${port}.`)
})

//--------MIDDLEWARE-------------//
//body parser extracts the entire body portion of an incoming request
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)

app.use(cors())
app.use(express.json())

//redux middleware
// const compilier = webpack(config)
// app.use(webpackDevMiddleware(compilier, {noInfo: true, publicPath: config.output.publicPath}))
// app.use(webpackHotMiddleware(compilier))
//root endpoint

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