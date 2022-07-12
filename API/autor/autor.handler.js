const crud = require('../../crud')

async function addAutor(autor){
    const dadosSalvos = await crud.save("autor", undefined, autor);
    return dadosSalvos;
}

async function mostrarAutores(){
    const mostrar = await crud.get("autor");
    return mostrar;
}

module.exports = {
    addAutor,
    mostrarAutores
}