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

                // Seleccionar lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(lugar => lugar.id === id);

                // Save DB
                busquedas.agregarHistorial(lugarSel.nombre);

                // Clima data
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                // Resultados
                console.clear();
                console.log(`\nInformacion de la ciudad\n`.green);
                console.log(`Ciudad: ${lugarSel.nombre}`);
                console.log(`Lat: ${lugarSel.lat}`);
                console.log(`Lng: ${lugarSel.lng}`);
                console.log(`Temperatura: ${clima.temp}`);
                console.log(`Minima: ${clima.min}`);
                console.log(`Maxima: ${clima.max}`);
                console.log(`Como esta el clima: ${clima.desc}`);
                break;
            
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => console.log(`${i+1} `.green + lugar))
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