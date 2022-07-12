
const crud = require('../../crud')

async function addCliente(cliente){
    const dadosSalvos = await crud.save("cliente", undefined, cliente);
    return dadosSalvos;
}

async function mostrarClientes(){
    const mostrar = await crud.get("cliente");
    return mostrar;
}

module.exports = {
    addCliente,
    mostrarClientes
}