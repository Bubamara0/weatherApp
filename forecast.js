
const axios = require('axios')


const forecast = async (lat, lon) => {
    const urlTemp = ` http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fecb63f5e33ead6599ddb965cb4f41bf `
    try {
            const {data} = await axios(urlTemp);
            const tempCelcius = (data.main.temp-273.15)
            const sky = (data.weather[0].description)
            console.log(`Today, the temperature is ${tempCelcius.toFixed(1)} °C, and the weather type is ${sky}`)
        
    } catch (err) {
            console.log(err.message)
    }
}


module.exports = forecast;


