const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            auth: '/api/auth',
            categorias: '/api/categorias',
            usuarios: '/api/usuarios',
        }

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
        this.app.use(this.paths.auth, require('../routes/auth.routes'));
        this.app.use(this.paths.categorias, require('../routes/categorias.routes'));
        this.app.use(this.paths.usuarios, require('../routes/user.routes'));
    }


    listen() {
        this.app.listen(this.port);
    }

}


module.exports = Server;