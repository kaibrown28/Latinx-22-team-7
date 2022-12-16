const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/Projects", returns all projects for that user
router.get("/", isUserLoggedIn, async (request, response) => {
  try {
    const Projects = request.context.models.Projects;
    response.json(await Projects.findAll({ where: { username: request.payload.username } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// Create Route "/Projects", creates a new Projects
router.post("/", isUserLoggedIn, async (request, response) => {
  try {
    const Projects = request.context.models.Projects;
    request.body.username = request.payload.username;
    response.json(await Projects.create(request.body));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// update Route "/Projects/:id", updates a Projects
router.put("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Projects = request.context.models.Projects;
    const id = request.params.id;
    response.json(await Projects.update(request.body, { where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// destroy Route "/Projects/:id", deletes a Projects
router.delete("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Projects = request.context.models.Projects;
    const id = request.params.id;
    response.json(await Projects.destroy({ where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

//export router
module.exports = router;