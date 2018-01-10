const app = require('./config-express')

const home = require('./routes/home')(app)
const produtos = require('./routes/produtos')(app)

app.listen(3000, () => { console.log('subiu') })