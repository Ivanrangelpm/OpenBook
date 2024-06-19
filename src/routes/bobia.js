var express = require("express");
var router = express.Router();

var bobiaController = require("../controllers/bobiaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/salvarRecomendacao", function (req, res) {
    bobiaController.salvarRecomendacao(req, res);
})

router.get("/carregarConversa", function (req, res) {
    bobiaController.carregarConversa(req, res);
});

module.exports = router;