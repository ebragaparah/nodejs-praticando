const mysql = require('mysql')

const connectionFactory = () => {
    const connnectionParams = {
        host: 'localhost',
        user: 'root',
        password: 'caelum',
        database: 'casadocodigo'
    }
    return mysql.createConnection(connnectionParams)
}

module.exports = connectionFactory