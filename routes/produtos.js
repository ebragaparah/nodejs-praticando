const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const connection = require('../infra/connection-factory')()
        const livros = connection.query('SELECT * FROM livros', (err, _livros) => {
            response.render('produtos/lista', { produtos: _livros })
        })
        connection.end()
    })

    app.get('/produtos/:id', (request, response) => {
        const connection = require('../infra/connection-factory')()
        const query = `SELECT * FROM livros WHERE id = ?`
        const livros = connection.query(query, request.params.id, (err, livro) => {
            response.render('produtos/mostra', { produto: livro[0] })
        })
        connection.end()
    })
}

module.exports = produtos