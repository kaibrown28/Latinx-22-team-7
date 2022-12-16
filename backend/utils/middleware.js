//dependencies
const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = requires=("./cors")

//models
const User = require("../models/User")
const Company = require("../models/Company")
const Jobs = require("../models/Jobs")
const Projects = require("../models/Projects")
const Resources = require("../models/Resources")
const Students = require("../models/Student")

//controllers
const HomeController = require("../controllers/HomeController")
const AuthController = require("../controllers/AuthController")
const CompanyController = require("../controllers/CompanyController")
const JobsController = require("../controllers/JobsController")
const ProjectsController = require("../controllers/ProjectsController")
const ResourcesController = require("../controllers/ResourcesController")
const StudentController = require("../controllers/StudentController")
const SignUpController = require("../controllers/SignUpController")
const LogInController = require("../controllers/LogInController")

// "function to create context property in every request with shared data"
const applicationContext = (request, response, next) => {
    // "data to share can be added in this object" ADD FURTHER MODELS HERE
    request.context = {
        models: { User, Company, Jobs, Projects, Resources, Students }
    }

    next()
}

const registerMiddleware = app => {
    app.use(cors(corsOptions))
    app.use(cookieParser())
    app.use(express.json())
    app.use(morgan("tiny"))
    app.use(applicationContext)
    app.use("/home", HomeController)
    app.use("/auth", AuthController)
    app.use("/login", LogInController)
    app.use("/signup", SignUpController)
    app.use("/company", CompanyController)
    app.use("/jobs", JobsController)
    app.use("/projects", ProjectsController)
    app.use("/resources", ResourcesController)
    app.use("/students", StudentController)
}

module.exports = registerMiddleware