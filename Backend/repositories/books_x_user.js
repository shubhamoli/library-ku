const issuedbooks = require("../model/users_x_books");

let booksIssued = {};

booksIssued.getIssuedBooks = function () {
    return issuedbooks.getIssuedBooks();
};

module.exports = booksIssued;
