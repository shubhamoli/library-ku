const route = require("express").Router();
const studentController = require("../controllers/studentController");

route.post("/create", (req, res) => {
    console.log(req.data);
    studentController.CreateStudent(req);
});

route.get("/:id", (req, res) => {
    const rollno = req.params.id;
    studentController.GetStudent(rollno, res);
});

module.exports = route;
