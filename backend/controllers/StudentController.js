const router = require("express").Router();
const isUserLoggedIn = require("../utils/auth");

// Index Route "/Students", returns all Students
router.get("/", isUserLoggedIn, async (request, response) => {
  try {
    const Students = request.context.models.Students;
    response.json(await Students.findAll({ where: { username: request.payload.username } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// Create Route "/Students", creates a new Student
router.post("/", isUserLoggedIn, async (request, response) => {
  try {
    const Students = request.context.models.Students;
    request.body.username = request.payload.username;
    response.json(await Students.create(request.body));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// update Route "/Students/:id", updates a Student
router.put("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Students = request.context.models.Students;
    const id = request.params.id;
    response.json(await Students.update(request.body, { where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

// destroy Route "/Students/:id", deletes a Student
router.delete("/:id", isUserLoggedIn, async (request, response) => {
  try {
    const Students = request.context.models.Students;
    const id = request.params.id;
    response.json(await Students.destroy({ where: { id } }));
  } catch (error) {
    response.status(400).json({ error });
  }
});

//export router
module.exports = router;