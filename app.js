const express = require('express')
const PORT = process.env.PORT || 5000;
const app = express()

//* Middelware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

//* importing routing files
const WheatherRoute = require('./Routes/wheather.js')

//* using template engine as ejs
app.set('view engine', 'ejs')

//* middlware router
app.use('/', WheatherRoute)

app.listen(PORT, () => {
    console.log(`ThunderBolt's server is running on ${PORT}`)
})