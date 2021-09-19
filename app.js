const express = require('express');
const PORT = process.env.PORT || 5000 ;
const app = express();

//* Middelware -->
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
console.log("hello world middleware")


//* importing routing files -->
const WheatherRoute = require('./Routes/wheather.js');
console.log("hello world routing")


//* using template engine as ejs -->
app.set('view engine', 'ejs');
console.log("hello world engine")


//* middlware router -->
app.use('/', WheatherRoute);
console.log("hello world middle router")


app.listen(PORT, () => {
    console.log(`ThunderBolt's server is running on http://localhost:${PORT}`)
});