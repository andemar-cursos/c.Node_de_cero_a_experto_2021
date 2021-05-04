const { v4: uuidv4 } = require('uuid');


class Tarea {
    id = '';
    dec = '';
    completadoEn = null;

    constructor(desc) {
        this.id = uuidv4();
        this.dec = desc;
        this.completadoEn = null;
    }
}


module.exports = Tarea;