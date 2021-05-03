const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


console.clear();

crearArchivo(argv.base, argv.listar)
    .then((msg)  => console.log(msg + " Creado"))
    .catch((msg) => console.log(msg + " - err"));


    