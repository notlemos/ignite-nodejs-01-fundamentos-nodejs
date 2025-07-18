// /users/:id

// REGEX -> Expressão regular, uma forma de encontrar textos que seguem de formato especifico, em um texto grande.

export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g  // Aqui encontra na rota que começa com ":" e contem uma ou mais letras de a-zA-Z 
    const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}`)
    
    return pathRegex    
}

