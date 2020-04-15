const axios = require('axios');


const getWeather = async(latitude, longitude) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=895b3545bc1cbedd0ce2629ba815fbfb&units=metric`);

    return response.data.main.temp;
};


module.exports = {
    getWeather
};