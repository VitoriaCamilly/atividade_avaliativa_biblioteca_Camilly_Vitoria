const crud = require('../../crud')

async function alugarLivros(idCliente, idLivro){
    const listaLivros = [];
    const alugarLivros = await crud.getById("livro", idLivro);
    listaLivros.push(alugarLivros, idCliente);
    return listaLivros;
}

async function salvarAluguel(body){
    const dados = await crud.save("aluguel", undefined, body);
    return dados;
}

async function mostrarAlugueis(){
    const mostrar = await crud.get("aluguel");
    return mostrar;
}

module.exports = {
    alugarLivros,
    mostrarAlugueis,
    salvarAluguel
}