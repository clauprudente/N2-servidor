const { connect } = require('./ComidasRepository')
const { comidasModel } = require('./ComidasSchema')
connect();

const getAll = async () => {
    return comidasModel.find((error, comidas) => {
        return comidas
    })
}

const getById = (id) => {
    return comidasModel.findById(id)
}
const add = async (comida) => {
    const novaComida = new comidasModel(comida)
    return novaComida.save()
}

const deleteComida = (id) => {
    return comidasModel.findByIdAndDelete(id)
}

const update = (id, comida) => {
    return comidasModel.findByIdAndUpdate(
        id,
        { $set: comida },
        { new: true }, // RETORNAR A COMIDA JA ATUALIZADA NO CALLBACK
    )
}

module.exports = {
    getAll,
    add,
    deleteComida,
    update,
    getById
}