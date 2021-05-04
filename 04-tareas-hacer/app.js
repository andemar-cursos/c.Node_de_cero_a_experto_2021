const { inquirerMenu, pausa } = require('./helpers/inquirer');
require('colors');

console.clear();

const main = async() => {

    let opt = '';

    do{
        opt = await inquirerMenu();
        await pausa();
        console.log('\n');
    }while(opt !== '0')


}



main();