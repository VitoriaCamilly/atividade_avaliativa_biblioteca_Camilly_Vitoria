const crud = require('../../crud')

async function adicionarEditora(editora) {
    if (editora.nome != undefined) {
        if (editora.cnpj != undefined) {
            const dados = await crud.save("editora", undefined, editora);
            return dados;
        } else {
            return "É necessário informar o cnpj!"
        }
    } else {
        return "É necessário informar o nome";
    }
}

async function mostrarEditora() {
    const mostrar = await crud.get("editora");
    return mostrar;
}

module.exports = {
    adicionarEditora,
    mostrarEditora
}