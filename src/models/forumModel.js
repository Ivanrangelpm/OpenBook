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

function listar() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            f.idForum,
            f.nomeForum,
            f.fotoForum,
            f.fkAdm,
            u.id AS idUsuario,
            u.nick,
            u.foto
            FROM forum f
                INNER JOIN usuario u
                    ON f.fkAdm = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarTopico(nomeTopico, fkForum, fkCriador) {
    console.log("ACESSEI O forum MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeTopico, fkForum, fkCriador);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO discussao (titulo, fkForum, fkCriador) VALUES ('${nomeTopico}', ${fkForum}, ${fkCriador});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTopico() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    d.idDiscussao,
    d.titulo,
    d.fkCriador,
    u.id AS idUsuario,
    u.nick,
    u.foto,
    f.nomeForum,
    d.fkForum
    FROM discussao d
        JOIN usuario u
            ON d.fkCriador = u.id
        JOIN forum f on d.fkForum = f.idForum;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    listar,
    cadastrarTopico,
    listarTopico
};