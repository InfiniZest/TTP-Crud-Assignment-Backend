const Sequelize = require("sequelize");

const db = require("../db");

const Student = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      len: [0, 4],
    },
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = Student;
