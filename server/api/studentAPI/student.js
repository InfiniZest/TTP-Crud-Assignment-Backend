const router = require("express").Router();
const { Student } = require("../../db/models");

//returns all students
//localhost:8080/api/students
router.get("/", async (req, res, next) => {
    try {
      const allStudents = await Student.findAll();
      res.json(allStudents);
    } catch (error) {
      next(error);
    }
  });

// obtain a single student by their ID
//localhost:8080/api/students/id
router.get("/:id", async (req, res, next) => {
    try {
      const studentById = await Student.findByPk(req.params.id);
      res.json(studentById);
    } catch (error) {
      next(error);
    }
  });

//creates a new student
//localhost:8080/api/students/newStudent
router.post("/newStudent", async (req, res, next) => {
    try {
      let newCampus = await Student.create(req.body);
      res.status(201).send(newStudent);
    } catch (error) {
      next(error);
    }
  });

//deletes a student by id
//localhost:8080/api/students/delete/id
router.delete("/delete/:id", async (req, res, next) => {
    try {
      let studentToDelete = await Student.findByPk(req.params.id);
      await studentToDelete.destroy();
      res.status(201).send("deleted");
    } catch (error) {
      next(error);
    }
  });

  