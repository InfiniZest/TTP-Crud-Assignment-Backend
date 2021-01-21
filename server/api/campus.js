const router = require("express").Router();
const { Campus } = require("../db/models");

//returns all campuses
//localhost:8080/api/campuses
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    res.json(allCampuses);
  } catch (error) {
    next(error);
  }
});

//return a single campus by id
//localhost:8080/api/campuses/id
router.get("/:id", async (req, res, next) => {
  try {
    const campusById = await Campus.findByPk(req.params.id);
    res.json(campusById);
  } catch (error) {
    next(error);
  }
});

//creates a new campus
//localhost:8080/api/campuses/newCampus
router.post("/newCampus", async (req, res, next) => {
  try {
    let newCampus = await Campus.create(req.body);
    res.status(201).send(newCampus);
  } catch (error) {
    next(error);
  }
});

//deletes a campus by id
//localhost:8080/api/campuses/delete/id
router.delete("/delete/:id", async (req, res, next) => {
  try {
    let campusToBeDeleted = await Campus.findByPk(req.params.id);
    await campusToBeDeleted.destroy();
    res.status(201).send("deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
