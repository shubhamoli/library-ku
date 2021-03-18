const db = require("../util/database");

const Create = (data) => {
    const rollno = data.rollno;
    const stname = data.stname;
    const fathersname = data.fathersname;
    const dob = data.dob;
    const course = data.course;
    const sem = data.semester;

    db.query(
        "INSERT INTO Students (rollnumber, name, fathers_name, dob, course, semester) VALUES (?,?,?,?,?,?)",
        [rollno, stname, fathersname, dob, course, sem],
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
