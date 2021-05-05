const { inquirerMenu, pausa } = require('./helpers/inquirer');

const main = async() => {

    let opcion;

    do {
        
        opcion = await inquirerMenu();

        switch (opcion) {
            case 1:
                console.log('1');
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