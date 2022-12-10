const router = require("express").Router()

router.get("/", (request, response) =>{
    response.json({response: "server is working"})
});

module.exports = router