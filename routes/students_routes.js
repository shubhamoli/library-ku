const route = require("express").Router();
const studentController = require("../controllers/studentController");


route.post("/create", (req, res) => {
    console.log(req.data);
    studentController.CreateStudent(req);
});

/*router.get("/", (req, res) => {
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
});*/

module.exports = route;
