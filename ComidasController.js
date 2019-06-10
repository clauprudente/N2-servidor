const { comidas } = require('./ComidasRepository')

const getAll = () => {
    return comidas;
}

const getById = (id) => {
    const comidaById = getAll().pratosFavoritos.find(comida => {
        return comida.id === id;
    })
    return comidaById;
}

const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8);
    getAll().pratosFavoritos.push(comida)
    return comida;
}

const deleteComida = (id) => {
    getAll().pratosFavoritos = getAll().pratosFavoritos.filter((comida) => {
        return comida.id !== id;
    })
}

const update = (id, comida) => {
    let comidaCadastrada = getAll().pratosFavoritos.find(item => {
        return item.id === id
    })

    if (comidaCadastrada === undefined) return false;

    // if (comida.nome) comidaCadastrada.nome = comida.nome;

    // if (comida.descricao) comidaCadastrada.descricao = comida.descricao;

    const comidaAtualizada = {
        ...comidaCadastrada,
        ...comida
    }

    deleteComida(id)
    getAll().pratosFavoritos.push(comidaAtualizada)

    return true;
}

module.exports = {
    getAll,
    add,
    deleteComida,
    update,
    getById
}