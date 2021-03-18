const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const db = require("./util/database");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
