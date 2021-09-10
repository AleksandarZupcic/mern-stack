const mongoose = require("mongoose");

const host = "127.0.0.1";
const port = 27017;

// Insert your collection name here //
const collection = "wizardb";

const conn = `mongodb://${host}:${port}/${collection}`;

mongoose.connect(conn, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).catch((err) => {
    console.log(`Connection error! ${err}`);
});

const db = mongoose.connection;
module.exports = db;