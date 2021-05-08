const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

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
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }


    listen() {
        this.app.listen(this.port);
    }

}


module.exports = Server;