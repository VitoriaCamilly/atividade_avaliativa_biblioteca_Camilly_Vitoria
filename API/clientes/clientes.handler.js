const crud = require('../../crud')

async function adicionarCliente(cliente) {
    if (cliente.nome != undefined) {
        if (cliente.cpf != undefined) {
            if (cliente.dataNascimento != undefined) {
                if (cliente.telefone != undefined) {
                    const dadosSalvos = await crud.save("cliente", undefined, cliente);
                    return dadosSalvos;
                } else {
                    return "É necessário informar o telefone!"
                }
            }else {
                return "É necessário informar a data de nascimento!"
            }
        }else {
            return "É necessário informar o cpf!"
        }
    }else {
        return "É necessário informar o nome!"
    }
}

async function mostrarClientes() {
    const mostrar = await crud.get("cliente");
    return mostrar;
}

async function mostrarClienteID(id){
    const mostrarId = await crud.getById("cliente", id);
    return mostrarId;
}

module.exports = {
    adicionarCliente,
    mostrarClientes,
    mostrarClienteID
}