const express = require("express");
const router = express.Router();

const editoraHandler = require("./editora.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await editoraHandler.adicionarEditora(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await editoraHandler.mostrarEditora();
    res.json(dados);
});

module.exports = router;