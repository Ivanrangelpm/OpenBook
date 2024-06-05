var database = require("../database/config")

function listarLivros() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
        l.idLivro,
        l.nome,
        l.autor,
        l.genero,
        l.nota,
        l.dtLeitura,
        l.fotoLivro,
        l.fkUsuario
            FROM livro l
            ORDER BY l.dtLeitura DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrarLivro(nomeLivro, autor, genero, nota, dtLeitura, fotoLivro, fkUsuario) {
    console.log("ACESSEI O livro MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLivro, autor, genero, nota, dtLeitura, fotoLivro, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO livro (nome, autor, genero, nota, dtLeitura, fotoLivro, fkUsuario) VALUES 
	('${nomeLivro}', '${autor}', '${genero}', ${nota}, '${dtLeitura}', '${fotoLivro}', ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarLivro,
    listarLivros
};