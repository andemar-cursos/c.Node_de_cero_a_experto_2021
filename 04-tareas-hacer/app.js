const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer');
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
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                console.log(ids);
                break;
            case '6':
                    const id = await listadoTareasBorrar(tareas.listadoArr);
                    if(id === '0') break;
                    const ok = await confirmar('Esta seguro ?');
                    if(ok) {
                        tareas.borrarTarea(id);  
                        guardarDB(tareas.listadoArr);
                        console.log('Tarea borrada'.green);
                    } 
                    break;
            default:
                break;
        }

        
        await pausa();
    }while(opt !== '0')


}



main();