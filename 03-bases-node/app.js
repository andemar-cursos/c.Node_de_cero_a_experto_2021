const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.base, argv.listar)
    .then((msg)  => console.log(msg.rainbow + " Creado"))
    .catch((msg) => console.log(msg + " - err"));


    