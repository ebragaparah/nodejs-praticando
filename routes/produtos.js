const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const connection = require('../infra/connection-factory')()
        const ProdutosDAO = require('../dao/ProdutosDAO')
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.lista((err, _livros) => {
            response.render('produtos/lista', { produtos: _livros })
        })
        connection.end()
    })

    app.get('/produtos/:id', (request, response) => {
        const connection = require('../infra/connection-factory')()
        const ProdutosDAO = require('../dao/ProdutosDAO')
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.mostra(request.params.id, (err, livro) => {
            response.render('produtos/mostra', { produto: livro[0] })
        })
        connection.end()
    })
}

module.exports = produtos