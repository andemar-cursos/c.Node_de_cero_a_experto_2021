const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs').argv;

console.clear();


console.log(process.argv);
console.log(argv);

// console.log(numero);

// crearArchivo(numero)
//     .then((msg)  => console.log(msg + " nice"))
//     .catch((msg) => console.log(msg + " Booo!!"));