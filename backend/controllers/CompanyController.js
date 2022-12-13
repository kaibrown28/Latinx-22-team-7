const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/compnay", returns all companies for that user
router.get("/", isUserLoggedIn, async (request, response) => {
  try {
    const Company = request.context.models.Company;
    response.json(await Company.findAll({ where: { username: request.payload.username } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// Create Route "/company", creates a new company
router.post("/", isUserLoggedIn, async (request, response) => {
  try {
    const Company = request.context.models.Company;
    request.body.username = request.payload.username;
    response.json(await Company.create(request.body));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// update Route "/company/:id", updates a company
router.put("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Company = request.context.models.Company;
    const id = request.params.id;
    response.json(await Company.update(request.body, { where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// destroy Route "/company/:id", deletes a company
router.delete("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Company = request.context.models.Company;
    const id = request.params.id;
    response.json(await Company.destroy({ where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

//export router
module.exports = router;