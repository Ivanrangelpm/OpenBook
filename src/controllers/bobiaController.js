var bobiaModel = require("../models/bobiaModel");

function carregarConversa(req, res) {
    bobiaModel.carregarConversa().then(function (resultado) {
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


function salvarRecomendacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var titulo = req.body.tituloServer;
    var texto = req.body.textoServer;

    // Faça as validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Nome do livro está undefined!");
    } else if (texto == undefined) {
        res.status(400).send("Autor está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        bobiaModel.salvarRecomendacao( titulo, texto, fkUsuario)
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
    salvarRecomendacao,
    carregarConversa
}