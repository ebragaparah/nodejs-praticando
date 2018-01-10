const home = (app) => {
    app.get('/', (request, response) => {
        response.render('home/home')
    })
}

module.exports = home