const express = require('express')
const PORT = 5500
const app = express()

//* Middelware
app.use(express.static('public'))

//* importing routing files
const WheatherRoute = require('./Routes/wheather.js')

//* using template engine as ejs
app.set('view engine', 'ejs')

//* middlware router
app.use('/', WheatherRoute)

app.listen(PORT, () => {
    console.log(`ThunderBolt's server is running on https://localhost:${PORT}`)
})