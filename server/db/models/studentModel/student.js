const Sequelize = require("sequelize");

const db = require("../../db");

const Student = db.define("student", {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            // only allow letters for firstname
            isAlpha: true
        }
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            // only allow letters for lastname
            isAlpha:  true
        }
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    gpa: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            len: [0,4]
        }
    }
});

module.exports = Student;