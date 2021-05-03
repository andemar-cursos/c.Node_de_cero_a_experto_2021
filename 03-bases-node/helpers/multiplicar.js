const fs = require('fs');

const crearArchivo = async(base = 5, listar) => {
    try {

        
        let iteracion = 10;
        let salida = "";
        
        for(let i = 1; i <= iteracion; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        if(listar) imprimir(base, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

const imprimir = (base, salida) => {
    console.log("===========")
    console.log(`Tabla del ${base}`)
    console.log("===========")
    console.log(salida);
}

module.exports = {
    crearArchivo
}