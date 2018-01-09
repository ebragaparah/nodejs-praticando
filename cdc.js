const express = require('express');
const app = express();

app.get('/', function(request, response) {
    response.send('<h1>Home</h1>');
});

app.get('/produtos', function(request, response) {
    const nomeDaPagina = 'Produtos';
    response.send(`
        <h1>${nomeDaPagina}</h1>
        <ul>
            <li>Livros</li>
            <li>Cursos</li>
        </ul>
    `);
});

app.listen(3000, function() {
    console.log('subiu');
});