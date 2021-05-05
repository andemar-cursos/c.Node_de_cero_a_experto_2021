require('colors');
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

    cargarTareasFromArray(tareas = []) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });

    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


    listadoCompleto() {

        this.listadoArr.forEach((tarea, i) => {

            (tarea.completadoEn)
                ? console.log(`${i+1}. `.green + `${tarea.desc} :: ` + `Completada`.green)
                : console.log(`${i+1}. `.green + `${tarea.desc} :: ` + `Pendiente`.red)

        })

    }


    listarPendientesCompletadas( completadas = true) {

        let i = 1;

        this.listadoArr.forEach( tarea => {

            if(completadas && tarea.completadoEn){
                console.log(`${i}. `.green + `${tarea.desc} :: ` + `${tarea.completadoEn}`.green)
                i++;
            }
            else if(!completadas && !tarea.completadoEn){
                console.log(`${i}. `.green + `${tarea.desc} :: ` + `Pendiente`.red)
                i++;
            }

        })

    }

}


module.exports = Tareas;