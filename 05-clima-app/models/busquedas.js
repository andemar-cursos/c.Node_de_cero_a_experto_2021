const axios = require('axios');
const env = require('../environment/environment');

class Busquedas {

    historial = [];

    constructor() {
        //TODO: Leer DB
    }

    get paramsMapbox() {
        return {
            'access_token': env.MAPBOX,
            'limit': 5,
            'language': 'es',
        };
    }

    async ciudad(lugar = '') {

        // Peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            })

            const resp = await instance.get();
            console.log(resp.data);

            return []; // Retornar las ciudades coincidentes
        } catch (error) {
            
        }

    } 
}


module.exports = Busquedas;