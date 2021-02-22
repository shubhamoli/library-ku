const booksModel = require("../model/books");

let BooksRepository = {};

BooksRepository.getBooks = function () {
    console.log("dvfjdkhbf");
    return booksModel.getAllBooks();
};

module.exports = BooksRepository;
