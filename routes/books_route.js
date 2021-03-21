const route = require("express").Router();
const booksController = require("../controllers/booksController");

route.post("/create", (req, res) => {
    console.log(req.body);
    booksController.CreateBook(req);
});

module.exports = route;
