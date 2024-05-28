var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    forumController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    forumController.listar(req, res);
});

router.get("/listarTopico", function (req, res) {
    forumController.listarTopico(req, res);
});

router.post("/cadastrarTopico", function (req, res) {
    forumController.cadastrarTopico(req, res);
})

module.exports = router;