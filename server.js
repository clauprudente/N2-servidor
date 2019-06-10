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

servidor.get("/comidas/:id", (request, response) => {
    const id = request.params.id
    response.status(200).send(controller.getById(id));
})

servidor.post("/comidas", bodyParser.json(), (request, response) => {
    controller.add(request.body)
    response.sendStatus(201)
})

servidor.delete('/comidas/:id', (request, response) => {
    controller.deleteComida(request.params.id)
    response.sendStatus(204)
})

servidor.patch('/comidas/:id', bodyParser.json(), (request, response) => {
    const id = request.params.id;
    const sucesso = controller.update(id, request.body);
    (sucesso) ? response.sendStatus(204) : response.sendStatus(404);
})

servidor.put('/comidas/:id', (request, response) => {
    controller.change(request.params.id, request.body);
    response.sendStatus(200)
})

servidor.listen(3000, function () {
    console.log("servidorzinho rodando na porta 3000")
})
