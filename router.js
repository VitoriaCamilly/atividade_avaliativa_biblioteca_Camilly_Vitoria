const express = require("express");
const router = express.Router();

const clientes = require("./API/clientes/clientes.controller");
router.use("/clientes", clientes);

const autor = require("./API/autor/autor.controller");
router.use("/autor", autor);

const editora = require("./API/editora/editora.controller");
router.use("/editora", editora);

const livros = require("./API/livros/livros.controller");
router.use("/livros", livros);
module.exports = router;