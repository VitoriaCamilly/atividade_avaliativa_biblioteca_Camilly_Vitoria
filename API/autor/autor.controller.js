const express = require("express");
const router = express.Router();

const autorHandler = require("./autor.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await autorHandler.addAutor(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await autorHandler.mostrarAutores();
    res.json(dados);
});

module.exports = router;