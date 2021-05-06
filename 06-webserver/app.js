
const http = require('http');


http.createServer((req, res) => {

    res.write('Hola mundo');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end();
})
.listen(8080);