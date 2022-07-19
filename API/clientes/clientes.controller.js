const express = require("express");
const router = express.Router();

const clientesHandler = require("./clientes.handler");

router.post("/", async (req, res) => {
    const body = req.body;
    const dadosSalvos = await clientesHandler.addCliente(body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await clientesHandler.mostrarClientes();
    res.json(dados);
});

router.post("/alugar", async (req, res) => { 
    const body = req.body;
    console.log(body);
    const dados = await clientesHandler.alugarLivros(body);
    res.json(dados);
});


module.exports = router;