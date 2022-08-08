const express = require("express");
const router = express.Router();

const clientesHandler = require("./clientes.handler");

router.post("/", async (req, res) => {
    const dadosSalvos = await clientesHandler.adicionarCliente(req.body);
    res.json(dadosSalvos);
});

router.get("/", async (req, res) => {
    const dados = await clientesHandler.mostrarClientes();
    res.json(dados);
});

router.get("/", async (req, res) => {
    const dados = await clientesHandler.mostrarClienteID(req.body.id);
    res.json(dados);
});

module.exports = router;