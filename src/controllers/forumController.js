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

module.exports = {
    cadastrar
}