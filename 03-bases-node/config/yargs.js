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

    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica el numero de iteraciones que se haran'
    })
    .check( (argv, options) => {
        if(isNaN(argv.hasta)){
            throw 'El hasta debe de ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;