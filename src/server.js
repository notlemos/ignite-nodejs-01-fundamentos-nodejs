import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'
import { routes } from './routes.js'
import { extractQueryParameters } from './utils/extract-query-parameters.js'


// - Criar usuários
// - Listagem de usuários 
// - Edição de usuários 
// - Remoção de usuários 

// - HTTP 
//    - Método HTTP 
//    - URL 

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end 
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET /uses => Buscando um usuário no back-end
// POST /users => Criando um usuário no back-end

// Stateful x Stateless 
// Stateful -> Armazenados em memória e perdidos todas as vezes em que a aplicação for reiniciada. 
// StaleLess -> Dados Armazenados em um local externo (ex: Banco de Dados) e quando for reiniciada nada muda. 

// JSON - JavaScript Object Notation

// Cabeçalhos (Requisições/Respostas) => Metadados

// HTTP Status Code

// Query Parameters: URL Stateful => Filtros, Paginação, Não-obrigatórios.
// Route Parameter: Identificação de Recurso. Sem informações sensiveis.
// Request Body: Envio de informações de um formulário. (HTTPs)

// http://localhost:3333/users?userId=1&name=Diego -> Query Parameters

// GET http://localhost:3333/users/1 -> GET USER COM ID = 1
// DELETE http://localhost:3333/users/1 -> DELETE USER COM ID = 1

// POST http://localhost:3333/users -> Cria um usuário sem ter que colocar todas informações na própria URL.

// Edição e Remoção do Usuário.

const server = http.createServer(async(req, res) => {
    const { method, url } = req 

    await json(req, res)
    
    const route = routes.find(route => {
        return route.method == method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)
        
        //console.log(extractQueryParameters(routeParams.groups.query))

        const { query, ...params } = routeParams.groups

        req.params = params 
        req.query = query ? extractQueryParameters(query) : {} 
        
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)