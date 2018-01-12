const ProdutosDAO = require('../dao/ProdutosDAO')

const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const produtosDAO = new ProdutosDAO(app.infra.connectionFactory())
        produtosDAO.lista((err, _livros) => {
            response.render('produtos/lista', { produtos: _livros })
        })
    })

    app.post('/produtos', (request, response) => {
        const produtosDAO = new ProdutosDAO(app.infra.connectionFactory())
        const produto = request.body

        request.assert('titulo', 'Título não pode ser vazio').notEmpty()
        request.assert('preco', 'Preço precisa ser float').isFloat()

        const errors = request.validationErrors()

        if (errors) {
            response.send(errors)
        } else {
            produtosDAO.salva(produto, (err) => {
                response.redirect('/produtos')
            })
        }
    })

    app.get('/produtos/cadastrar', (request, response) => {
        response.render('produtos/form')
    })

    app.get('/produtos/:id', (request, response) => {
        const produtosDAO = new ProdutosDAO(app.infra.connectionFactory())
        produtosDAO.mostra(request.params.id, (err, livro) => {
            response.render('produtos/mostra', { produto: livro.shift() })
        })
    })
}

module.exports = produtos