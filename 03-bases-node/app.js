const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                    })
                    .check( (argv, options ) => {
                        if(isNaN(argv.base)){
                            throw 'La base tiene que ser un numero';
                        }
                        return true;
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false
                    })
                    .check( (argv, options) => {
                        if(isNaN(argv.listar)){
                            throw 'El listar debe ser un booleano'
                        }
                        return true;
                    })
                    .argv;

console.clear();

crearArchivo(argv.base, argv.listar)
    .then((msg)  => console.log(msg + " Creado"))
    .catch((msg) => console.log(msg + " - err"));