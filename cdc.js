const express = require('express')
const app = express()

const home = require('./routes/home')(app)
const produtos = require('./routes/produtos')(app)

app.set('view engine', 'ejs')

app.listen(3000, () => { console.log('subiu') })