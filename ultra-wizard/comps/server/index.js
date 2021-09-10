const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

db.on("error", console.error.bind(console, "Connection error!"));

app.get("/", (req, res) => {
    res.send("Hello there!");
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));