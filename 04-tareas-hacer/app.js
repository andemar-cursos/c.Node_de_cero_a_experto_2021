const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
require('colors');
const Tareas = require('./models/tareas');
const { guardarDB } = require('./helpers/guardarArchivo');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(tareas.listadoArr);
                guardarDB(tareas);
                break;

            case '2':
                // Listar
                console.log(tareas.listadoArr);
                break;
            default:
                break;
        }

        
        await pausa();
    }while(opt !== '0')


}



main();