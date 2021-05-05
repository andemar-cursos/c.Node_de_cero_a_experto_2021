require('dotenv').config({ path: 'environment/environment.env' });
const { inquirerMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {

    const busquedas = new Busquedas();
    let opcion;

    do {
        
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                // Mostrar msg
                const input = await leerInput('Ciudad: ');
                
                // Buscar lugares
                const lugares = await busquedas.ciudad(input);
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(lugar => lugar.id === id);
                // Seleccionar lugar
                // Clima data
                // Resultados
                console.log(`\nInformacion de la ciudad\n`.green);
                console.log(`Ciudad: ${lugarSel.nombre}`);
                console.log(`Lat: ${lugarSel.lat}`);
                console.log(`Lng: ${lugarSel.lng}`);
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