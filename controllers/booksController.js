const booksModel = require("../models/books_model");

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
        return booksModel.Create(data);
    }
};

const GetBooksByCourseSemester = (course, semester) => {
    booksModel.GetBooksByCourseSemester(course, semester, function (error, books) {
        if (error) {
            return false;
        } else {
            return books;
        }
    });
};

module.exports = {
    Create,
    GetBooksByCourseSemester,
};
