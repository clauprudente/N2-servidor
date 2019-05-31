const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController.js')


const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response) => {
    response.status(200).send(controller.getAll())
})

servidor.listen(3000, function () {
    console.log("servidorzinho rodando na porta 3000")
})