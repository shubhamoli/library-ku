const studentModel = require("../models/students_model");
const booksController = require("./booksController");

const isValid = (data) => {
    // returning true here for now
    // but you should add your required checks here
    return true;
}

const Create = (data) => {
    if (!data) {
        return;
    }

    if (isValid(data)) {
        // return data with "id" key attached
        // model should auto. attach that
        return studentModel.Create(data);
    }

};

const GetByRollNo = (rollno) => {
    if (!rollno) {
        return false;
    }

    studentModel.GetByRollNo(rollno, function (err, student) {
        if (err) {
            return false;
        } else {
            if (student.length === 0) {
                return false;
            }
            return student;
        }
    });
};

module.exports = {
    Create,
    GetByRollNo,
};
