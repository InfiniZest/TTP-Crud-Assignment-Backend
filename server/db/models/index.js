const Campus = require("./campusModel/campus");
const Student = require("./studentModel/student")

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = { Campus, Student };
// add relations between student and campus here