const mongoose = require("mongoose");
const connLink = "mongodb://127.0.0.1:27017/cinema";

mongoose.connect(connLink, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).catch((e) => {
    console.error("Connection error!", e.message);
});

const db = mongoose.connection;
module.exports = db;