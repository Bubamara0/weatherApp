const axios = require('axios')
const foreCast = require('./forecast.js')


const geoLoc1 = async (cityName) => {
    const urlLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=fecb63f5e33ead6599ddb965cb4f41bf`; 
    try {
        const {data} = await axios(urlLoc);
        const lat = data[0].lat
        const lon = data[0].lon
       // console.log(lat, lon)
        return foreCast(lat, lon)
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = geoLoc1;
















// const fetchPokemon = async (pokemon) => {
//     const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

//     try {
//         const { data: {abilities} } = await axios(urlPokemon);
//         abilities.forEach(({ability}) => console.log(ability.name))
//     } catch (err){
//         console.log(err.message)
//     }
// }

// fetchPokemon(process.argv[2]);