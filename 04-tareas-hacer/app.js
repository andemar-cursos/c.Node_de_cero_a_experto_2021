const { inquirerMenu, pausa } = require('./helpers/inquirer');
require('colors');

console.clear();

const main = async() => {

    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log('\n'); 
        await pausa();
    }while(opt !== '0')


}



main();