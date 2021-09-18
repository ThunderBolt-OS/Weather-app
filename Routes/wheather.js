  
const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()

router.get('/', (req, res) => {
    res.render('index', (req, res) => {
        city = null;
        des = null;
        icon = null;
        temp = null;
        feels_like = null;
        pressure = null;
        humidity = null;
        wind_speed = null;

    });
});

router.post('/', async (req, res) => {
    console.log(req.body)
    
    const city = req.body.city;
    console.log(city);
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=f8479523969c89afd226b37fa696839e`
    console.log(url_api)

    try {
        await axios.get(url_api).then(resp => {

            console.log(resp.data);

            if (data.message === 'city not found') {
                res.render('index', () => {

                    city: data.message;
                    des: null;
                    feels_like: null;
                    humidity: null;
                    pressure: null;
                    temp: null;
                    icon: null;
                    wind: null;
                });

            } else {

                const city = data.name;
                const des = data.weather[0].description;
                const icon = data.weather[0].icon;
                const temp = data.main.temp;
                const feels_like = data.main.feels_like;
                const pressure = data.main.pressure;
                const humidity = data.main.humidity;
                const wind_speed = data.wind.speed;

                res.render('index', () => {
                    city, des, icon, temp, feels_like, pressure, humidity, wind_speed
                });
                
            }
            
        });
        
    } catch (err) {
        
        city = 'something is wrong (ﾉ◕ヮ◕)';
        des = null;
        icon = null;
        temp = null;
        feels_like = null;
        pressure = null;
        humidity = null;
        wind_speed = null;

        
    }

});

module.exports = router;