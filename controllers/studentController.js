const student_model = require("../models/students_model");
const booksController = require("./booksController");

const CreateStudent = (req) => {
    const data = req.body;

    student_model.Create(data);
};
const GetStudent = (rollno, res) => {
    console.log("in get controller.", rollno);
    student_model.Get(rollno, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            if (result.length === 0) {
                console.log("user don't exists");
            } else {
                console.log("user exists.");
                const semester = result[0].semester;
                const course = result[0].course;
                booksController.GetBooksByRedirection(course, semester, res);
            }
        }
    });
};
module.exports = {
    CreateStudent,
    GetStudent,
};
