require('dotenv').config()

const axios = require('axios')
const foreCast = require('./forecast.js')

// const db = require('db')
// db.connect({
//   key : process.env.DB_KEY
// })

const geoCode = async (cityName) => {
    const urlLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=fecb63f5e33ead6599ddb965cb4f41bf`; 
    if (process.argv[2] != null){
    try {
        const {data} = await axios(urlLoc);
        const lat = data[0].lat
        const lon = data[0].lon
       // console.log(lat, lon)
        foreCast(lat, lon)
    } catch (err) {
        console.log(err.message)
    }
    }else{
        console.log("Please enter a city")
    }
}

module.exports = geoCode;












