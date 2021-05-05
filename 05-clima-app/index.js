const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async() => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                // Mostrar msg
                const lugar = await leerInput('Ciudad: ');
                
                await busquedas.ciudad(lugar);
                // Buscar lugares
                // Seleccionar lugar
                // Clima data
                // Resultados
                console.log(`\nInformacion de la ciudad\n`.green);
                console.log(`Ciudad: ${lugar}`);
                console.log(`Lat: `);
                console.log(`Lng: `);
                console.log(`Temperatura: `);
                console.log(`Minima: `);
                console.log(`Maxima: `);
                break;
            
            case 2:
                console.log('2');
                break;

            case 0:
                console.log('Salir');
                break;
            default:
                break;
        }

        await pausa();
    } while (opcion !== 0);

}



main();