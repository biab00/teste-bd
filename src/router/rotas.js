const express = require("express")
const rota = express.Router()

const control = require("../control/user")

rota.get("/", control.paginaInicial)
rota.post("/config", control.config)
rota.get("/mostrar", control.mostrar)
rota.get("/info", control.info)

module.exports = rota;