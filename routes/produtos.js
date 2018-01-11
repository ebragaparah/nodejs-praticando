const ProdutosDAO = require('../dao/ProdutosDAO')
const connection = require('../infra/connection-factory')()

const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.lista((err, _livros) => {
            response.render('produtos/lista', { produtos: _livros })
        })
    })

    app.post('/produtos', (request, response) => {
        const produtosDAO = new ProdutosDAO(connection)
        const produto = request.body
        produtosDAO.salva(produto, (err) => {
            if (err)
                response.send(err)
            response.send(produto)
        })
    })

    app.get('/produtos/cadastrar', (request, response) => {
        response.render('produtos/form')
    })

    app.get('/produtos/:id', (request, response) => {
        const produtosDAO = new ProdutosDAO(connection)
        produtosDAO.mostra(request.params.id, (err, livro) => {
            response.render('produtos/mostra', { produto: livro[0] })
        })
    })
}

module.exports = produtos