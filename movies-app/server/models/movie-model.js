const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema(
    {
        name: { 
            type: String,
            required: true
        },
        time: {
            type: [String],
            required: true
        },
        rating: {}
    }, { timestamps: true }
);

module.exports = mongoose.model("movie", Movie);