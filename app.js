const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()

//* importing routing files
const WheatherRoute = require('./Routes/wheather.js')

//* using template engine as ejs
app.set('view engine', 'ejs')

//* middlware router
app.use('/', Wheather)

app.listen(PORT, () => {
    console.log(`ThunderBolt's server is running on https://localhost:${PORT}`)
})