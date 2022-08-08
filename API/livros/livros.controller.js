const express = require("express");
const router = express.Router();

const livrosHandler = require("./livros.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await livrosHandler.adicionarLivro(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await livrosHandler.mostrarLivros();
    res.json(dados);
});

module.exports = router;