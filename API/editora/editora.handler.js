const crud = require('../../crud')

async function addEditora(editora){
    const dados = await crud.save("editora", undefined, editora);
    return dados;
}

async function mostrarEditora(){
    const mostrar = await crud.get("editora");
    return mostrar;
}

module.exports = {
    addEditora,
    mostrarEditora
}