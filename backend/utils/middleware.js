//dependencies
const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")

//models
const User = require("../models/User")


const corsOptions = requires=("./cors")
//controllers
const HomeController = require("../controllers/HomeController")
const AuthController = require("../controllers/AuthController")

// "function to create context property in every request with shared data"
const applicationContext = (request, response, next) => {
    // "data to share can be added in this object" ADD FURTHER MODELS HERE
    request.context = {
        models: {User}
    }

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