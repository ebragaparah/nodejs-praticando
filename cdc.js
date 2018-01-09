const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.send('<h1>Home</h1>');
});

app.get('/produtos', function(request, response) {
    response.render('produtos/lista', { produtos: produtos });
});

app.listen(3000, function() {
    console.log('subiu');
});