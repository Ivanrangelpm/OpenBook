var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

 
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        nick: resultadoAutenticar[0].nick,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        foto: resultadoAutenticar[0].foto
                                    });
                               
                            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            )
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var nick = req.body.nickServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var foto = req.body.fotoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, nick, email, senha, foto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function alterar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var id = req.body.idServer;
    var nome = req.body.nomeServer;
    var nick = req.body.nickServer;
    var email = req.body.emailServer;
    var foto = req.body.fotoServer;
    console.log(`id nome nick email foto ${id} ${nome}, ${nick}`)

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (nick == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.alterar(id, nome, nick, email, foto)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    alterar
}