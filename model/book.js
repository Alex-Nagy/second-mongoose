const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  length: Number,
  year: String,
});
const Book = mongoose.model("Book", bookSchema);

module.exports = Books;
