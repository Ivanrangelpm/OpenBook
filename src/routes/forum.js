var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    forumController.cadastrar(req, res);
})

module.exports = router;