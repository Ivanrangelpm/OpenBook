var database = require("../database/config")

function exibirLivro(idLivro){
    console.log(`Acessei o MODEL Livro function exibirLivro: ${idLivro} `);
    var instrucaoSql = `
        SELECT 
        l.idLivro,
        l.nome,
        l.autor,
        l.genero,
        l.nota,
        l.fotoLivro
            FROM livro l
            WHERE idLivro = ${idLivro};
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarLivros() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
        l.idLivro,
        l.nome,
        l.autor,
        l.genero,
        l.nota,
        l.fotoLivro
            FROM livro l;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarLivrosUsuario() {
    console.log("ACESSEI O FORUM  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select 
    u.idUsuarioLeu,
    u.fkLivro,
    u.nota AS notaUsuarioLeu,  
    u.fkUsuario,
    u.dtLeitura,
    l.idLivro,
    l.nome, 
    l.autor, 
    l.genero,
    l.fotoLivro,
    l.nota AS notaLivro 
 from usuarioLeu as u join livro as l on u.fkLivro = l.idLivro;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function cadastrarLivro(nomeLivro, autor, genero, nota, fotoLivro) {
    console.log("ACESSEI O livro MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeLivro, autor, genero, nota, fotoLivro);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO livro (nome, autor, genero, nota,fotoLivro) VALUES 
	('${nomeLivro}', '${autor}', '${genero}', ${nota},'${fotoLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarLivroLido(fkLivro, fkUsuario) {
    console.log("ACESSEI O livro MODEL em CADASTRAR  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",fkLivro, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    INSERT INTO livro (nome, autor, genero, nota,fotoLivro) VALUES 
	('${nomeLivro}', '${autor}', '${genero}', ${nota},'${fotoLivro}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivro,
    listarLivros,
    exibirLivro,
    listarLivrosUsuario
};