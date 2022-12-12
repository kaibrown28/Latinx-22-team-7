const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//middleware

////////routes//////////

//signup
router.post("/signup", async (request, response) => {
    try{
        //gets the model
        const User = request.context.models.User;
        //hashes the password
        request.body.password = await bcrypt.hash(request.body.password, 10);
        //creates a new user
        const user = await User.create(request.body);
        //respond, then send back a user without password
        const response = { username: user.username, role: user.role };
        response.json(response);
    } catch(error) {
        response.status(400).json({error});
    }
});

//login
router.post("/login", async (request, response) => {
    try {
        console.count("login");
        //get the model from context
        const User = request.context.models.User;
        console.count("login");
        //get the username and password
        const { username, password} = request.body;
        //check if user exists
        const user = await User.findOne({where: { username} });
        if (user) {
            //password check
        const verifyPassword= await  bcrypt.compare(password, user.password);
        if (verifyPassword) {
            // don't send user password
            const userData = { username: user.username, role: user.role };
            // sign token
            const token = jwt.sign(userData, process.env.SECRET);
            // respond
            response.cookie("token", token, { httpOnly: true }).json(userData);
          } else {
            throw "Passwords do not match";
          }
        } else {
          throw "User Does Not Exist";
        }
      } catch (error) {
        response.status(400).json({ error });
      }
    });

//logout
router.checkout("/logout", async (request, response) => {
        response.clearCookie("token").json({ response: "You are logged out"})
});

module.exports = router; 