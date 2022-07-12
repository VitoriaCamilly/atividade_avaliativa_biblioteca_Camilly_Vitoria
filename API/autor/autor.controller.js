const express = require("express");
const router = express.Router();

const autorHandler = require("./autor.handler");

router.post("/", async (req, res) => {
    const body = req.body;
    const dadosSalvos = await autorHandler.addAutor(body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await autorHandler.mostrarAutores();
    res.json(dados);
});

module.exports = router;