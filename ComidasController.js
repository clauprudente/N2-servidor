const comidas = {
    pratosFavoritos: []
}
const getAll = () => {
    return comidas;
}

const add = (comida) => {
    getAll().id = Math.random().toString(36).substr(-8);
    getAll().pratosFavoritos.push(comida)
    return comida;
}
const deleteComida = (id) => {
    getAll().pratosFavoritos = getAll().pratosFavoritos.filter((comida) => {
        return comida.id !== id;
    })
}

module.exports = {
    getAll,
    add,
    deleteComida
}