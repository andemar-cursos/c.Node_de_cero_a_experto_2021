const Tarea = require('./tarea');

class Tareas {
    
    _listado = {};

    get listadoArr() {
        
        const listado = [];

        Object.values(this._listado).forEach(value => listado.push(value));

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareasArr = []) {

        Object.keys(tareasArr).forEach(key => {
            this._listado[key] = tareasArr[key];
        })

    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}


module.exports = Tareas;