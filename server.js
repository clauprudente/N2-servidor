const comidas = [
    {
        "nome": "Batata frita",
        "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        "imagem": "https://i2.wp.com/www.chinamaniarestaurante.com/wp-content/uploads/2018/03/Batata-frita.jpg?fit=1127%2C841"
    },
    {
        "nome": "Macarronada",
        "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        "imagem": "https://t1.rg.ltmcdn.com/pt/images/7/0/0/img_macarronada_7_600.jpg"
    },
    {
        "nome": "Falafel",
        "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        "imagem": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/5937e1569b514f058d91ace7cc976140/BFV37212_FalafelTwoWays_TastyVeg_v4_1.jpg"
    },
    {
        "nome": "Creme de abóbora",
        "descricao": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
        "imagem": "https://abrilmdemulher.files.wordpress.com/2016/09/receita-creme-abobora.jpg?quality=90&strip=info&w=620&h=372&crop=1"
    },
    {
        "nome": "Paçoquita",
        "descricao": "O melhor doce já inventado",
        "imagem": "https://a-static.mlcdn.com.br/618x463/pacoca-rolha-embalada-pacoquita-c-10-santa-helena/docemalu/2625/b619cbd159a1372bbc202e92308fa041.jpg"
    },
    {
        "nome": "Estrogonofe",
        "descricao": "Estrogonofe é um prato originário da culinária russa composto de cubos de carne bovina servidos num molho de creme de leite.",
        "imagem": "http://www.saboresajinomoto.com.br/uploads/images/recipes/estrogonofe-de-frango.jpg"
    },
    {
        "nome": "Arroz",
        "descricao": "O arroz é uma planta da família das gramíneas que alimenta mais da metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo. É rico em hidratos de carbono.",
        "imagem": "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/2/8/1453293531982.jpg"
    }

]

const http = require('http')

const servidor = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end("Hello Wonderful Word!")
    } else if (request.url === "/comidas") {
        if (request.method === 'GET') {
            response.writeHead(200, {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            })
            response.write(
                JSON.stringify(comidas))
            response.end()

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