const crud = require('../../crud')

async function verificarLivrosAlugados(codLivro) {
    let cont = 0;
    const aluguel = await crud.get("aluguel");
    for (let i = 0; i < aluguel.length; i++) {
        const codigo = codLivro[i];
        aluguel[i] == codigo;
        if (aluguel[i] != undefined) {
            cont++;
        }
        return cont;
    }
}

async function verificarClientes(codCliente) {
    let cont = 0;
    const aluguel = await crud.get("aluguel");
    for (let i = 0; i < aluguel.length; i++) {
        const codigo = codCliente[i];
        aluguel[i] == codigo;
        if (aluguel[i] != undefined) {
            cont++;
        }
        return cont;
    }
}

async function salvarAluguel(dados) {
    const codLivro = dados.codLivro;
    const codCliente = dados.codLivro;
    const verificacaoLivro = await verificarLivrosAlugados(codLivro);
    const verificacaoCliente = await verificarClientes(codCliente);
    if (verificacaoLivro == 0 || verificacaoLivro == undefined) {
        if (verificacaoCliente == 0 || verificacaoCliente == undefined) {
            const dados = await crud.save("aluguel", undefined, dados);
            return dados;
        } else {
            return "Esta Pessoa já tem Livros cadastrados!";
        }
    } else {
        return "Algum livro já está cadastrado por outra pessoa!";
    }
}

async function mostrarAlugueis() {
    const mostrar = await crud.get("aluguel");
    return mostrar;
}

module.exports = {
    mostrarAlugueis,
    salvarAluguel
}