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

const GetBooksByCourseSemester = (course, semester, result) => {
    let crs = "";
    crs = course;
    db.query(
        `select * from Books where course=? and semester=?`,
        [course, semester],
        (err, resp) => {
            if (err) {
                result(err, null);
            } else {
                const data = JSON.parse(JSON.stringify(resp));
                console.log(data);
                result(null, data);
            }
        }
    );
};

module.exports = {
    Create,
    GetBooksByCourseSemester,
};
