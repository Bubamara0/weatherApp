require('dotenv').config()
const geoCode = require('./geoCode.js')

geoCode(process.argv[2])

