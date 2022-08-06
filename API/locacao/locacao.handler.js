const crud = require('../../crud')

async function alugarLivros(codLivro) {
    const listaLivros = [];
    const alugarLivros = await crud.getById("livro", codLivro);
    listaLivros.push(alugarLivros);
    return listaLivros;
}

async function validarAluguel(idCliente, idLivro) {
    const listaLivros = [];
    const verificacaoUsuario = await verificarClientes(idCliente);
    if (verificacaoUsuario != undefined) {
        return "Usuário já tem livros Alugados!";
    } else {
        const verificacaoLivro = await verificarLivrosAlugados(idLivro);
        console.log(verificacaoLivro);
        if (verificacaoLivro != undefined) {
            console.log("1", verificacaoLivro);
            return "Este livro ja esta alugado!";
        } else {
            console.log("2", verificacaoLivro);
            console.log(idLivro);
            // const alugarLivros = await crud.getById("livro", idLivro);
            // listaLivros.push(alugarLivros);
            const dados = await crud.save("aluguel", undefined, listaLivros);
            return dados;
        }
    }
}

async function verificarClientes(idCliente) {
    const codigo = await crud.getById("aluguel", idCliente);
    return codigo;
}

async function verificarLivrosAlugados(idLivro) {
    const codigo = await crud.getById("aluguel", idLivro);
    return codigo;
}

async function salvarAluguel(body) {
    const dados = await crud.save("aluguel", undefined, body);
    return dados;
}

async function mostrarAlugueis() {
    const mostrar = await crud.get("aluguel");
    return mostrar;
}

module.exports = {
    alugarLivros,
    mostrarAlugueis,
    salvarAluguel,
    validarAluguel
}