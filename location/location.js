const axios = require('axios');


const getLocationLatLng = async(direction) => {
    const encodedUrl = encodeURI(direction);

    const INSTANCE = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'e42b5a05afmshc344daa07e9ce8cp1f1011jsn0983b446d84e' }
    });

    const response = await INSTANCE.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direction}`);
    }

    const data = response.data.Results[0];
    const location = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        location,
        lat,
        lng
    };
};


module.exports = {
    getLocationLatLng
}