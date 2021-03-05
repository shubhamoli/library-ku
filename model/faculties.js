const DB = require("./DB");

let faculties = {};

faculties.getFaculty = function () {
    return DB.faculties;
};

module.exports = faculties;
