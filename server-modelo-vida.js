const http = require('http');

const server = http.createServer(function(request, response) {
    const routes = {
        '/produtos': '<h1>Produtos</h1>',
        '/': '<h1>Home</h1>'
    };

    if (routes[request.url]) {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.end(routes[request.url]);
    }
    response.writeHead(404);
    response.end('<h1>Erro</h1>');
    
});

server.listen(3000, 'localhost', function() {
    console.log('rodando');
});