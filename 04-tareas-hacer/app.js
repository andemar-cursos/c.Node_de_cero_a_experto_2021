const {mostrarMenu, pausa} = require('./helpers/mensajes')
require('colors');

console.clear();

const main = async() => {

    mostrarMenu();

    pausa();
}



main();