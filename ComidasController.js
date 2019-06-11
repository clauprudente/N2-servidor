const { connect } = require('./ComidasRepository')
const { comidasModel } = require('./ComidasSchema')
connect();

const getAll = async () => {
    return comidasModel.find((erro, comidas) => {
        if (erro) {
            console.error(erro)
        }
        return comidas;
    })
}

const getById = (id) => {
    return comidasModel.findById(
        id, (error, comida) => {
            return comida;
        }
    )
}

const add = (comida) => {
    const novaComida = new comidasModel(comida)
    novaComida.save()
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