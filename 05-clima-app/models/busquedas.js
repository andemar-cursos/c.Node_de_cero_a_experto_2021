const axios = require('axios');

class Busquedas {

    historial = [];

    constructor() {
        //TODO: Leer DB
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
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
            console.log(error);
        }

    } 
}


module.exports = Busquedas;