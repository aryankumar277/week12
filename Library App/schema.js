const mongoose = require("mongoose")

const { Schema } = mongoose;

const librarySchema = new mongoose.Schema({
    bname: String,
    issuer: String,
    dueDate: {
        type: Date,
    }
});

module.exports = mongoose.model("library", librarySchema, "Lib");