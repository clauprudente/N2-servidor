const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const controller = require('./ComidasController.js')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get("/comidas", (request, response) => {
    response.status(200).send(controller.getAll())
})

servidor.post("/comidas", (request, response) => {
    controller.add(request.body)
    response.sendStatus(201)
})

servidor.delete('/comidas/:id', (request, response) => {
    controller.deleteComida(request.params.id)
    response.sendStatus(204)
})

servidor.patch('/comidas/:id', (request, response) => {
    const id = request.params.id;
    controller.update(id, request.body)
    response.sendStatus(200)
})

servidor.put('/comidas/:id', (request, response) => {
    controller.change(request.params.id, request.body);
    response.sendStatus(200)
})

servidor.listen(3000, function () {
    console.log("servidorzinho rodando na porta 3000")
})
