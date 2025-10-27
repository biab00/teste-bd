const express = require("express")
const app = express()

app.use(express(express.json))
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

const rotas = require("./router/rotas")
app.use("/", rotas)

module.exports = app