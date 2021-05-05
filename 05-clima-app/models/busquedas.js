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

    paramsOpenWeather = (lat, lon) => {
        return {
            lat,
            lon,
            'appid': process.env.OPENWEATHER_KEY,
            'units': 'metric',
            'lang': 'es',
        };
    }

    async ciudad(lugar = '') {

        // Peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox,
            });

            const resp = await instance.get();
            
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); // Retornar las ciudades coincidentes
        } catch (error) {
            console.log(error);
        }

    }


    async climaLugar (lat, lon) {

        try {
            const instance = axios.create({
               baseURL: `https://api.openweathermap.org/data/2.5/weather`,
               params: this.paramsOpenWeather(lat, lon),
            });

            const resp = await instance.get();
            const data = resp.data;

            return {
                desc: data.weather[0].description,
                temp: data.main.temp,
                min: data.main.temp_min,
                max: data.main.temp_max,
            };
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = Busquedas;