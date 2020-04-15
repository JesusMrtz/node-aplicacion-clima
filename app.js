const ARGV = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            description: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;

const weather = require('./weather/weather');
const place = require('./location/location');


getInfo = async(direction) => {
    try {
        const getPlace = await place.getLocationLatLng(direction);
        const getWeather = await weather.getWeather(getPlace.lat, getPlace.lng);

        return `El clima de ${getPlace.location} es de ${getWeather}ºC`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direction}`;
    }
};

getInfo(ARGV.direccion)
    .then(console.log)
    .catch(console.log);