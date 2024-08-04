var livroModel = require("../models/livroModel");


function exibirLivro(req, res){
    var idLivro = req.params.idLivro;

    console.log('Controller ok,Indo para o a Função exibirLivros do Model')

    livroModel.exibirLivro(idLivro).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log(erro);
        console.log('There was an error to show de books.', erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listarLivros(req, res) {
    livroModel.listarLivros().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os livros: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarLivrosUsuario(req, res) {
    livroModel.listarLivrosUsuario().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os livros do usuario: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cadastrarLivro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeLivro = req.body.nomeLivroServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var nota = req.body.notaServer;
    var fotoLivro = req.body.fotoLivroServer;

    // Faça as validações dos valores
    if (nomeLivro == undefined) {
        res.status(400).send("Nome do livro está undefined!");
    } else if (autor == undefined) {
        res.status(400).send("Autor está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("genero está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("nota está undefined!");
    } else if (fotoLivro == undefined) {
        res.status(400).send("fotoLivro está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        livroModel.cadastrarLivro(nomeLivro, autor, genero, nota, fotoLivro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n ja estou em livroController !Houve um erro ao realizar o cadastro do forum! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrarLivroLido(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkLivro = req.body.fkLivroServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (fkLivro == undefined) {
        res.status(400).send("fkLivro está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        livroModel.cadastrarLivroLido(fkLivro, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n ja estou em livroController !Houve um erro ao realizar o cadastro do forum! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrarLivro,
    listarLivros, 
    exibirLivro,
    cadastrarLivroLido,
    listarLivrosUsuario
}