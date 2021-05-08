const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a db
        this.conectDB();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async conectDB() {
        await dbConnection();
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

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