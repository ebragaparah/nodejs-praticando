const ProdutosDAO = require('../dao/ProdutosDAO')
const connection = require('../infra/connection-factory')()

const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.lista((err, _livros) => {
            response.render('produtos/lista', { produtos: _livros })
        })
    })

    app.get('/produtos/:id', (request, response) => {
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.mostra(request.params.id, (err, livro) => {
            response.render('produtos/mostra', { produto: livro[0] })
        })
    })
}

module.exports = produtos