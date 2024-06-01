var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarLivro", function (req, res) {
    livroController.cadastrarLivro(req, res);
})

router.get("/listarLivros", function (req, res) {
    livroController.listarLivros(req, res);
});

module.exports = router;