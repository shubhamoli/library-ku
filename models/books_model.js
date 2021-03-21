const db = require("../util/database");

const Create = (data) => {
    const name = data.name;
    console.log("book's name is : ", name);
    const bookID = data.bookID;
    const tag = data.tag;
    const author = data.author;
    const total_books = data.total_Books;
    const semester = data.semester;
    const course = data.course;
    db.query(
        "INSERT INTO Books (name, bookID, tag, author, total_books, semester, course) VALUES (?,?,?,?,?,?,?)",
        [name, bookID, tag, author, total_books, semester, course],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success");
            }
        }
    );
};

module.exports = { Create };
