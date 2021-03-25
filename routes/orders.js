const route = require("express").Router();
const studentController = require("../controllers/studentController");

route.get("/coursebooks/:studentid", (req, res) => {

    // check if student exists
    const rollno = req.params.studentid;
    let student = studentController.Get(rollno);

    if (!student) {
        res.status(400).send({"msg": "student not found with given id"})
    }

    let semester = student[0].semester;
    let course = student[0].course;

    let books = booksController.getBooksByCourse(course, semester)

    // books has to be in JSON compatible format
    // otherwise create a function like parse(books) to convert DB response into JSON
    // return res.send(parse(books))
    return res.send(books)
});

module.exports = route;
