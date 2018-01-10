const produtos = (app) => {
    app.get('/produtos', (request, response) => {
        const produtos = ['Livros', 'Cursos']
        response.render('produtos/lista', { produtos: produtos })
    })
}

module.exports = produtos