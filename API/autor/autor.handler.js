const crud = require('../../crud')

async function addAutor(autor){
    if (autor.nome != undefined){
        const dadosSalvos = await crud.save("autor", undefined, autor);
        return dadosSalvos;
    } else {
        return "É necessário informar ao menos o nome do autor!";
    }
}

async function mostrarAutores(){
    const mostrar = await crud.get("autor");
    return mostrar;
}

module.exports = {
    addAutor,
    mostrarAutores
}