const model = require("../model/user")

const mostrar = async (req, res) => {
    const result = await model.mostrarDados();
    res.render("tabela", {result})
}
const config = async (req, res) => {
    const result = await model.config(req.body.comando);
    if (result.sqlMessage) res.send("erro: "+result.sqlMessage);
    else res.render("res", {result})
}

const paginaInicial = (req, res) => {
    res.render("pg")
}

const info = (req, res) => {
    res.render("info")
}


module.exports = {mostrar, config, paginaInicial, info}