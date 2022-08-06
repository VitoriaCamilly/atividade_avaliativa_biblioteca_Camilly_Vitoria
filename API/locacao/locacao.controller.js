const express = require("express");
const router = express.Router();

const locacaoHandler = require("./locacao.handler");

router.post("/", async (req, res) => { 
    const idCliente = req.body.idCliente;
    const idLivro = req.body.idLivro;
    const dados = await locacaoHandler.validarAluguel(idCliente, idLivro);
    res.json(dados);
});

router.get("/", async (req, res) => {
    const dados = await locacaoHandler.mostrarAlugueis();
    res.json(dados);
});

module.exports = router;