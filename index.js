const express = require("express");
const mongoose = require("mongoose");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/produto", produtoRoutes);

//BANCO
const DB_USER = "alisson";
const DB_PASSWORD = encodeURIComponent("xupCIG818KnCZlyo");

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.m7i64zp.mongodb.net/meuBanco?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectou ao banco!");
  })
  .catch((err) => console.log(err));
