const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
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
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check( (argv, options) => {
        if(isNaN(argv.listar)){
            throw 'El listar debe ser un booleano'
        }
        return true;
    })
    .argv;

module.exports = argv;