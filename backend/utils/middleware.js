const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = requires("morgan")
const cors = require("cors")


const corsOptions = requires=("./cors")
const HomeController = require("../controllers/HomeController")

// "function to create context property in every request with shared data"
const applicationContext = (request, response, next) => {
    // "data to share can be added in this object"
    request.context = {}
    // "move on to next middleware"
    next()
}

const registerMiddleware = app => {
    app.use(cors(corsOptions))
    app.use(cookieParser())
    app.use(express.json())
    app.use(morgan("tiny"))
    app.use(applicationContext)
    app.use("/", HomeController)
}

module.exports = registerMiddleware