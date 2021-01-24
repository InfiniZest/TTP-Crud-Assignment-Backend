const Campus = require("./campus");
const Student = require("./student");

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = { Campus, Student };
