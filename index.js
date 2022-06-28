const express = require("express");
const port = 3000;
const router = require("./router");

const app = express();
app.use(express.json());

app.use("/api", router);

app.listen(port, () => {
    console.log("Funcionou");
});

app.get("/", (req, res) => {
    res.send("<h1>Bem vindo a Biblioteca Digital</h1><button>Locar Livro</button><button>Cadastrar Cliente</button><button>Cadastrar Livro</button><button>Cadastrar Editora</button><button>Cadastrar Autor</button>")
});