const crud = require('../../crud')

async function salvar(livro, autor){
    const dados = await crud.save("escritores", livro, autor);
    return dados;
}

async function mostrarEscritores(){
    const mostrar = await crud.get("escritores");
    return mostrar;
}

module.exports = {
    salvar,
    mostrarEscritores
}