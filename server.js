const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const controller = require('./ComidasController.js')

const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response) => {
    response.status(200).send(controller.getAll())
})

servidor.post("/comidas", bodyParser.json(), (request, response) => {
    controller.add(request.body)
    response.sendStatus(201)
})

servidor.listen(3000, function () {
    console.log("servidorzinho rodando na porta 3000")
})
