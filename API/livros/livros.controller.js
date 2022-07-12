const express = require("express");
const router = express.Router();

const livrosHandler = require("./livros.handler");

router.post("/", async (req, res) => {
    const body = req.body;
    const dadosSalvos = await livrosHandler.addLivro(body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await livrosHandler.mostrarLivros();
    res.json(dados);
});


module.exports = router;