const { inquirerMenu } = require('./helpers/inquirer');
require('colors');

console.clear();

const main = async() => {

    let opt = '';

    do{
        opt = await inquirerMenu();

    }while(opt !== '0')


}



main();