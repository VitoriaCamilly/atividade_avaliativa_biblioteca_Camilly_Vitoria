const crud = require('../../crud')

async function addLivro(livro){
    const dados = await crud.save("livro", undefined, livro);
    return dados;
}

async function mostrarLivros(){
    const mostrar = await crud.get("livro");
    return mostrar;
}

module.exports = {
    addLivro,
    mostrarLivros
}