const bd = require("../config/bd")


const mostrarDados = async () => {
    const tabelas = await bd.promise().query("show tables")
    .then(([rows, fields]) => {console.log(fields);return rows }
    )
    .catch (err => {return err}
    )
    const result = [];
    if (tabelas) {    
        for(let i = 0; i<tabelas.length; i++) {
            const n1 = await bd.promise().query(`select * from ${tabelas[i].Tables_in_bioeroy}`)
            .then(([rows, fields]) => {return {resultados: rows, colunas: fields} }
            )
            .catch(([erro]) => {return erro}
            )

            result.push(n1)  
        };
    }
    return result
}

const config = async (comando) => {
    console.log("comando: "+comando)
    const result = await bd.promise().query(comando)
    .then(([rows, fields]) => {return {resultados: rows, colunas: fields}}
    )
    .catch (erro => {return erro}
    )
    return result
}

module.exports = {mostrarDados, config}