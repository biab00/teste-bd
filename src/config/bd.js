const sql = require("mysql2")

const conn = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "aluno123",
    database: "bioEroy"
});

conn.connect((erro) => {
    if (erro) {
        console.log("Deu ruim " + erro)
    }
    else console.log("Banco Conectado")
});


module.exports = conn;