const mongoose = require("mongoose");

//Cada Schema equivale collection
const Schema = mongoose.Schema;
const ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    descricao: { type: String }, //Opcional
    imagem: { type: String, required: true }
});

const comidasModel = mongoose.model("comidas", ComidasSchema)



module.exports = { comidasModel, ComidasSchema };