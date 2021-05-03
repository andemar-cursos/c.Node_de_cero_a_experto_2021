const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

const [,, arg3 = 'base=5'] = process.argv;
const[, numero = 5] = arg3.split('=');

console.log(numero);

crearArchivo(numero)
    .then((msg)  => console.log(msg + " nice"))
    .catch((msg) => console.log(msg + " Booo!!"));