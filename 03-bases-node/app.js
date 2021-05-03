const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

let numero = 3;

crearArchivo(numero)
    .then((msg) => {
        console.log(msg + " nice")
    })
    .catch((msg) => {
        console.log(msg + " Booo!!")
    });