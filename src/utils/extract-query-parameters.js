// ?search=Caio&page=2
// ['search=Caio', 'page=2']

// ['Search', 'Caio']
// ['page', '2']

export function extractQueryParameters(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
        const [key, value] = param.split('=')

        queryParams[key] = value 

        return queryParams
    }, {})
}