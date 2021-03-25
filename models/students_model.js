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
const Get = (rollno, result) => {
    db.query(
        `select * from Students where rollnumber=${rollno}`,
        (err, resp) => {
            if (err) {
                result(err, null);
            } else {
                const data = JSON.parse(JSON.stringify(resp));
                result(null, data);
            }
        }
    );
};
module.exports = {
    Create,
    Get,
};
