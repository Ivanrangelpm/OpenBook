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
                    ON f.fkAdm = u.id
                    ORDER BY f.idForum DESC;
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

function cadastrarComentario(comentario, fkTopico, fkUsuario) {
    console.log("ACESSEI O forum MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", comentario, fkTopico, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO comentario (texto, fkTopico, fkUsuario) VALUES ('${comentario}', '${fkTopico}', ${fkUsuario});
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
        JOIN forum f on d.fkForum = f.idForum
        ORDER BY d.idDiscussao DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarComentarios() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    c.idComentario,
    c.texto,
    c.dtComent,
    c.fkTopico,
    u.id AS idUsuario,
    u.nick,
    u.foto,
    d.titulo
    FROM comentario c
        JOIN usuario u
            ON c.fkUsuario = u.id
        JOIN discussao d on c.fkTopico = d.idDiscussao
        ORDER BY  c.dtComent;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    listar,
    cadastrarTopico,
    listarTopico,
    cadastrarComentario,
    listarComentarios
};