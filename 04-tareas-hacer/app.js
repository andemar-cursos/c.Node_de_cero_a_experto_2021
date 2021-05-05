const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
require('colors');
const Tareas = require('./models/tareas');
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasArr = leerDB();
    
    if(tareasArr) 
        tareas.cargarTareasFromArray(tareasArr);

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear opcion
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                guardarDB(tareas.listadoArr);
                break;

            case '2':
                // Listar
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            default:
                break;
        }

        
        await pausa();
    }while(opt !== '0')


}



main();