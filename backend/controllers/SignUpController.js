const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


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

module.exports = router; 