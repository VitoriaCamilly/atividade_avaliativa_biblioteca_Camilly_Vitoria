const crud = require('../../crud');

async function verificarEditora(codEditora) {
    let cont = 0;
    const editora = await crud.get("editora");
    for (let i = 0; i < editora.length; i++) {
        if (editora[i] == codEditora) {
            cont++;
        }
        console.log("1", cont)
        return cont;
    }
}

async function verificarAutor(codAutor) {
    let cont = 0;
    const autor = await crud.get("autor");
    for (let i = 0; i < autor.length; i++) {
        if (autor[i] == codAutor){
            cont++;
        }
    }
     console.log("2", cont)
     return cont;
}

async function adicionarLivro(livro) {
    const verifAutor = await verificarAutor(livro.codAutor);
    const verifEditora = await verificarEditora(livro.codEditora);
    if (livro.titulo != undefined) {
        if (livro.qtdPagina != undefined) {
            if (livro.ano != undefined) {
                if (livro.codEditora != undefined){
                    if (verifEditora > 0){
                        return "Esta editora não existe!";
                    } else {
                    if (livro.codAutor != undefined){
                        if (verifAutor > 0){
                            return "Este autor não existe!";
                        } else {
                            const dados = await crud.save("livro", undefined, livro);
                            return dados;
                        }
                    } else {
                        return "É necessário informar o/os autor!"
                    }                    
                    }
                } else {
                    return "É necessário informar a editora"
                }
            } else {
                return "É necessário informar o ano!"
            }
        } else {
            return "É necessário informar a quantidade de páginas"
        }
    } else {
        return "É necessário informar o título"
    }
}

async function mostrarLivros() {
    const mostrar = await crud.get("livro");
    return mostrar;
}

module.exports = {
    adicionarLivro,
    mostrarLivros
}