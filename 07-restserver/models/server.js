const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Servir public
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json('get api');
        });
        
        this.app.put('/api', (req, res) => {
            res.json('put api');
        });
        
        this.app.post('/api', (req, res) => {
            res.json('post api');
        });
        
        this.app.delete('/api', (req, res) => {
            res.json('delete api');
        });
    }


    listen() {
        this.app.listen(this.port);
    }

}


module.exports = Server;