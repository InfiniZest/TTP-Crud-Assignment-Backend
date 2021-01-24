const router = require("express").Router();
const { Student, Campus } = require("../db/models");

//returns all students
//localhost:8080/api/student
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.json(allStudents);
  } catch (error) {
    next(error);
  }
});

//return a single student by id
//localhost:8080/api/students/id
router.get("/:id", async (req, res, next) => {
  try {
    const studentById = await Student.findByPk(req.params.id, {
      include: { model: Campus },
    });
    res.json(studentById);
  } catch (error) {
    next(error);
  }
});

//creates a new student
//localhost:8080/api/students/newStudent
router.post("/newStudent", async (req, res, next) => {
  try {
    let newStudent = await Student.create(req.body);
    res.status(201).send(newStudent);
  } catch (error) {
    next(error);
  }
});

//deletes a student by id
//localhost:8080/api/students/delete/id
router.delete("/delete/:id", async (req, res, next) => {
  try {
    let studentToBeDeleted = await Student.findByPk(req.params.id);
    await studentToBeDeleted.destroy();
    res.status(201).send("deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
