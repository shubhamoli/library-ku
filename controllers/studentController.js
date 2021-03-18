const student_model = require("../models/students_model");

const CreateStudent = (req) => {
    const data = req.body;

    student_model.Create(data);
};
const GetStudent = () => {
    console.log("in get controller.");
};
module.exports = {
    CreateStudent,
    GetStudent,
};
