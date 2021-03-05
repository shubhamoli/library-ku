const express = require("express");
const router = express.Router();

const UserRepository = require("../repositories/user");
const BooksRepository = require("../repositories/books");
const IssuedBooksRepository = require("../repositories/books_x_user");
const facultyRepo = require("../repositories/faculty");

router.get("/", (req, res) => {
    res.send("hello world");
});

router.get("/users", (req, res) => {
    let users = UserRepository.getAllUsers();

    res.send(users);
});
router.get("/books", (req, res) => {
    let books = BooksRepository.getBooks();

    res.send(books);
});
router.get("/issuedbooks", (req, res) => {
    let issuedBooks = IssuedBooksRepository.getIssuedBooks();

    res.send(issuedBooks);
});
router.get("/facultieslibrary", (req, res) => {
    let faculties = facultyRepo.getFaculty();
    res.send(faculties);
});

module.exports = router;
