const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler");

router.post("/", async (req, res) => { 
    const body = req.body;
    const dados = await locacaoHandler.salvarAluguel(body);
    res.json(dados);
});

router.get("/", async (req, res) => {
    const dados = await locacaoHandler.mostrarAlugueis();
    res.json(dados);
});

module.exports = router;