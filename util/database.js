const mysql = require("mysql");

const db = mysql.createConnection({
    user: "root",
    password: "mysql001",
    host: "127.0.0.1",
    database: "librarySchema",
});

db.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("database successfully connected");
    }
});

module.exports = db;
