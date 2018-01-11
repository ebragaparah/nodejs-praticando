const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('./public'))

require('./routes/home')(app)
require('./routes/produtos')(app)

app.use((request, response, next) => {
    response.status(404).send(`Erro 404 da pagina ${request.originalUrl}`)
    next()
})

app.use((err, request, response, next) => {
    response.status(500).send(`Erro ${err}`)
    next()
})

module.exports = app