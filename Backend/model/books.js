const DB = require("./DB");

let books = {};

books.getAllBooks = function () {
    console.log("hello");
    return DB.books;
};

module.exports = books;
