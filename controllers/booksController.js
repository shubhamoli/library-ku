const booksModel = require("../models/books_model");

const CreateBook = (req) => {
    const data = req.body;
    booksModel.Create(data);
};
const GetBooks = () => {
    console.log("in get controller.");
};
module.exports = {
    CreateBook,
    GetBooks,
};
