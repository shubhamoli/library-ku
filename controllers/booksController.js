const booksModel = require("../models/books_model");

const CreateBook = (req) => {
    const data = req.body;
    booksModel.Create(data);
};
const GetBooksByRedirection = (course, semester, res) => {
    console.log(course, semester);
    booksModel.GetRedirectedBooks(course, semester, function (error, result) {
        if (error) {
            console.log(error);
        } else {
            res.send(result);
        }
    });
};
module.exports = {
    CreateBook,
    GetBooksByRedirection,
};
