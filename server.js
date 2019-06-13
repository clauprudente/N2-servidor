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

servidor.post('/comidas', (request, response) => {
    response.status(200).send(controller.add(request.body))
})

servidor.patch('/comidas/:id', (request, response) => {
    const id = request.params.id
    controller.update(id, request.body)
        .then(comida => {
            if (!comida) { response.sendStatus(404) } // nao encontrei a comida
            else { response.send(comida) } // o status default 200
        })
        .catch(error => {
            if (error.name === "MongoError" || error.name === "CastError") {
                response.sendStatus(400) // bad request
            } else {
                response.sendStatus(500)
            }
        })
})

servidor.delete('/comidas/:id', async (request, response) => {
    controller.deleteComida(request.params.id)
        .then(comida => response.sendStatus(204))
})

servidor.listen(3000, function () {
    console.log("servidorzinho rodando na porta 3000")
})
