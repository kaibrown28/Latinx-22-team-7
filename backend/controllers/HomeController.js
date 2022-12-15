const router = require("express").Router()

router.get("/", (request, response) =>{
    response.json({response: "server works"})
});

module.exports = router