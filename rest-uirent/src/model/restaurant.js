import mongoose, { Schema } from "mongoose";

let restaurantSchema = new Schema({
    name: String
})

module.exports = mongoose.model("Restaurant", restaurantSchema);