const express = require("express");
const router = express.Router();

const editoraHandler = require("./editora.handler");

router.post("/", async (req, res) => {
    const body = req.body;
    const dadosSalvos = await editoraHandler.addEditora(body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await editoraHandler.mostrarEditora();
    res.json(dados);
});

module.exports = router;