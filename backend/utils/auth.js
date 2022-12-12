require("dotenv").config();
const jwt = require("jsonwebtoken");

const isUserLoggedIn = async (request, response, next) => {
    try {
        //check for token in cookies
        const {token = false } = request.cookies;
        if (token) {
            const payload = await jwt.verify(token, process.env.SECRET);
            request.payload = payload;
            next();
        } else {
            throw "Not logged In";
        }
    } catch (error) {
        response.status(400).json ({error});
    }
};

module.exports = isUserLoggedIn