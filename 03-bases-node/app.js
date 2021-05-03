const fs = require('fs');


console.clear();

let numero = 3;
let iteracion = 10;
let salida = "";

console.log("===========")
console.log(`Tabla del ${numero}`)
console.log("===========")


for(let i = 1; i <= iteracion; i++){
    salida += `${numero} x ${i} = ${numero*i}\n`;
}

console.log(salida);


fs.writeFile(`tabla-${numero}.txt`, salida, null, (err)=> {

    if(err) throw err;

    console.log('tabla-5.txt creado');
})