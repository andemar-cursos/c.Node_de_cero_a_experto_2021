const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
require('colors');
const Tareas = require('./models/tareas');

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
                tareas.crearTarea(desc);
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