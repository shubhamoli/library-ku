const facultyModel = require("../model/faculties");

let getFaculty = {};

getFaculty.getFaculty = function () {
    return facultyModel.getFaculty();
};

module.exports = getFaculty;
