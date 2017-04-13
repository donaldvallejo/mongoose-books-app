var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book-app");

module.exports.Book = require("./books.js");
// module.exports.Author = require("./author.js");
// module.exports.Gnome = require("./gnome.js");
var Schema = mongoose.Schema;
module.exports.Book = require("./books.js");
