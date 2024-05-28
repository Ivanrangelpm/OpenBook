var forumModel = require("../models/forumModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeForum = req.body.nomeForumServer;
    var fotoForum = req.body.fotoForumServer;
    var admForum = req.body.admForumServer;

    // Faça as validações dos valores
    if (nomeForum == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fotoForum == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (admForum == undefined) {
        res.status(400).send("Seu email está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        forumModel.cadastrar(nomeForum, fotoForum, admForum)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n ja estou em forumController !Houve um erro ao realizar o cadastro do forum! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    forumModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarTopico(req, res) {
    
    forumModel.listarTopico().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarTopico(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeTopico = req.body.nomeTopicoServer;
    var fkForum = req.body.fkForumServer;
    var fkCriador = req.body.fkCriadorServer;

    // Faça as validações dos valores
    if (nomeTopico == undefined) {
        res.status(400).send("Seu nome de tópico está undefined!");
    } else if (fkForum == undefined) {
        res.status(400).send("Sua fkForum está undefined!");
    } else if (fkCriador == undefined) {
        res.status(400).send("Sua fkCriador está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        forumModel.cadastrarTopico(nomeTopico, fkForum, fkCriador)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n ja estou em forumController !Houve um erro ao realizar o cadastro do tópico! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    cadastrarTopico,
    listarTopico
}