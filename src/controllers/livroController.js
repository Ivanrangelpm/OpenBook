var livroModel = require("../models/livroModel");

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


function cadastrarLivro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeLivro = req.body.nomeLivroServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var nota = req.body.notaServer;
    var dtLeitura = req.body.dtLeituraServer;
    var fotoLivro = req.body.fotoLivroServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (nomeLivro == undefined) {
        res.status(400).send("Nome do livro está undefined!");
    } else if (autor == undefined) {
        res.status(400).send("Autor está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("genero está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("nota está undefined!");
    } else if (dtLeitura == undefined) {
        res.status(400).send("dtLeitura está undefined!");
    } else if (fotoLivro == undefined) {
        res.status(400).send("fotoLivro está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        livroModel.cadastrarLivro(nomeLivro, autor, genero, nota, dtLeitura, fotoLivro, fkUsuario)
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
    listarLivros
}