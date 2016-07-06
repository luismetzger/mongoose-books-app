//mongoose requirements
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//books Schema
var BookSchema = new Schema({
	title: String,
	author: String,
	image: String,
	releaseDate: Date
});


// model for books
var Book = mongoose.model("Book", BookSchema);

//export
module.exports = Book;