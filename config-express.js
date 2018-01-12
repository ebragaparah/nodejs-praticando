const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const load = require('express-load')

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator())

load('routes').then('infra').into(app)

app.use((request, response, next) => {
    response.status(404).send(`Erro 404 da pagina ${request.originalUrl}`)
    next()
})

app.use((err, request, response, next) => {
    response.status(500).send(`Erro ${err}`)
    next()
})

module.exports = app