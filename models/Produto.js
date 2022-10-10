const mongoose = require("mongoose");

const Produto = mongoose.model("Produto", {
  nome: String,
  preço: Number,
});

module.exports = Produto;
