var database = require("../database/config")

function cadastrar(nomeForum, fotoForum, admForum) {
    console.log("ACESSEI O forum MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeForum, fotoForum, admForum);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO forum (nomeForum, fotoForum, fkAdm) VALUES ('${nomeForum}', '${fotoForum}' , ${admForum});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};