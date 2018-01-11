class ProdutosDAO {
    constructor(connection) {
        this._connection = connection
    }

    lista(callback) {
        const livros = this._connection.query('SELECT * FROM livros', callback)
    }

    mostra(id, callback) {
        const query = `SELECT * FROM livros WHERE id = ?`
        const livros = this._connection.query(query, id, callback)
    }
    
    salva(produto, callback) {
        const query = `INSERT INTO livros SET ?`
        const livros = this._connection.query(query, produto, callback)
    }
}

module.exports = ProdutosDAO