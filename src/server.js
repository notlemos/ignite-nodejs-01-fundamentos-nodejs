import http from 'node:http'

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

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req 

    if (method == "GET" && url == "/users"){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))  
    }

    if (method == "POST" && url == "/users"){
        users.push({
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com"
        })
        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)