const fs = require('fs');

const crearArchivo = async(numero = 5) => {
    try {

        console.log("===========")
        console.log(`Tabla del ${numero}`)
        console.log("===========")

        let iteracion = 10;
        let salida = "";

        for(let i = 1; i <= iteracion; i++){
            salida += `${numero} x ${i} = ${numero*i}\n`;
        }

        console.log(salida);

    
        fs.writeFileSync(`tabla-${numero}.txt`, salida);
        return `tabla-${numero}.txt`;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    crearArchivo
}