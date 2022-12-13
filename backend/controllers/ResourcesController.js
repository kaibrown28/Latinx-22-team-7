const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/Resources", returns all Resources for that user
router.get("/", isUserLoggedIn, async (request, response) => {
  try {
    const Resources = request.context.models.Resources;
    response.json(await Resources.findAll({ where: { username: request.payload.username } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// Create Route "/Resources", creates a new Resources
router.post("/", isUserLoggedIn, async (request, response) => {
  try {
    const Resources = request.context.models.Resources;
    request.body.username = request.payload.username;
    response.json(await Resources.create(request.body));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// update Route "/Resources/:id", updates a Resources
router.put("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Resources = request.context.models.Resources;
    const id = request.params.id;
    response.json(await Resources.update(request.body, { where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// destroy Route "/Resources/:id", deletes a Resources
router.delete("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Resources = request.context.models.Resources;
    const id = request.params.id;
    response.json(await Resources.destroy({ where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

//export router
module.exports = router;