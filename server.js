const http = require('http')

const servidor = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end("Hello Wonderful Word!")
    } else if (request.url === "/comidas") {
        //response.end("Resposta Diferente")

        if (request.method === 'GET') {
            response.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            })
            response.end("<h1>Respostão do GET</h1>")
        }
        else if (request.method === 'POST') {
            response.writeHead(201, {
                "Content-Type": "text/html; charset=utf-8"
            })
            response.end("<h1>Respostão do POST</h1>")
        }
    }
})

servidor.listen(3000)

console.log("servidorzinho rodando na porta 3000")