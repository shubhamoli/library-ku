const DB = require("./DB");

let booksIssued = {};

booksIssued.getIssuedBooks = function () {
    return DB.user_x_books;
};

module.exports = booksIssued;
