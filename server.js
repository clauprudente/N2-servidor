const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const controller = require('./ComidasController.js')

const servidor = express()
servidor.use(cors())
servidor.use(bodyParser.json())

servidor.get("/comidas", async (request, response) => {
    controller.getAll()
        .then(comidas => response.send(comidas))
})

servidor.get('/comidas/:id', async (request, response) => {
    const id = request.params.id
    controller.getById(id)
        .then(comida => response.send(comida))
})

servidor.post("/comidas", (request, response) => {
    controller.add(request.body)
    response.sendStatus(201)
})

servidor.delete('/comidas/:id', async (request, response) => {
    controller.remove(request.params.id)
        .then(comida => response.sendStatus(204))
})


servidor.patch('/comidas/:id', (request, response) => {
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
