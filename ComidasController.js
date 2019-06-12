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

const getById = async (id) => {
    return comidasModel.findById(
        id,
        (error, comida) => {
            return comida
        }
    )
}

const add = (comida) => {
    const novaComida = new comidasModel(comida)
    novaComida.save()
}

const deleteComida = (id) => {
    return comidasModel.findByIdAndDelete(id)
}

const update = async (id, comida) => {
    return comidasModel.findByIdAndUpdate(
        id,
        { $set: comida },
        { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
        function (error, comida) { // é o nosso callback
            return comida
        }
    )
}

module.exports = {
    getAll,
    add,
    deleteComida,
    update,
    getById
}