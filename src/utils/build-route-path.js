// /users/:id

// REGEX -> Expressão regular, uma forma de encontrar textos que seguem de formato especifico, em um texto grande.

export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g  // Aqui encontra na rota que começa com ":" e contem uma ou mais letras de a-zA-Z 

    console.log(Array.from(path.matchAll(routeParametersRegex)))
}

