const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/Jobs", returns all jobs for that user
router.get("/", isUserLoggedIn, async (request, response) => {
  try {
    const Jobs = request.context.models.Jobs;
    response.json(await Jobs.findAll({ where: { username: request.payload.username } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// Create Route "/Jobs", creates a new Job
router.post("/", isUserLoggedIn, async (request, response) => {
  try {
    const Jobs = request.context.models.Jobs;
    request.body.username = request.payload.username;
    response.json(await Jobs.create(request.body));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// update Route "/Jobs/:id", updates a Jobs
router.put("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Jobs = request.context.models.Jobs;
    const id = request.params.id;
    response.json(await Jobs.update(request.body, { where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// destroy Route "/Jobs/:id", deletes a Jobs
router.delete("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Jobs = request.context.models.Jobs;
    const id = request.params.id;
    response.json(await Jobs.destroy({ where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

//export router
module.exports = router;