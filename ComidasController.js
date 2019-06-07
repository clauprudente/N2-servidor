const { comidas } = require('./ComidasRepository')

const getAll = () => {
    return comidas;
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
    let comidaCadastrada = getAll().find(comida => {
        return comida.id === id
    })

    if (comida.nome) {
        comidaCadastrada.nome = comida.nome;
    }
    if (comida.descricao) {
        comidaCadastrada.descricao = comida.descricao;
    }
}

module.exports = {
    getAll,
    add,
    deleteComida,
    update
}