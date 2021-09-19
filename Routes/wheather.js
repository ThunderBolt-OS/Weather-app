  
const router = require('express').Router();
const axios = require('axios');
require('dotenv').config()

router.get('/', (req, res) => {
    res.render('index', {
        city: null,
        des: null,
        icon: null,
        temp: null,
        feels_like: null,
        pressure: null,
        humidity: null,
        wind_speed: null,

    });
    console.log("hello world 5")
});

router.post('/', async (req, res) => {
    console.log(req.body)
    
    const city = req.body.city;
    // console.log(city);
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=f8479523969c89afd226b37fa696839e`
    console.log(url_api)
    // console.log("hello world 7")


    
    axios.get(url_api).then(resp => {

        console.log(resp.data);

        if (resp.data.message === 'city not found') {
            res.render('index',  {

                city: resp.data.message,
                des: null,
                feels_like: null,
                humidity: null,
                pressure: null,
                temp: null,
                icon: null,
                wind: null,
            
            });


    }   else {

        const city = resp.data.name;
        const des = resp.data.weather[0].description;
        const icon = resp.data.weather[0].icon;
        const temp = resp.data.main.temp;
        const feels_like = resp.data.main.feels_like;
        const pressure = resp.data.main.pressure;
        const humidity = resp.data.main.humidity;
        const wind_speed = resp.data.wind.speed;

        res.render('index', {
            city: city,
            des: des,
            icon:icon,
            temp: temp,
            feels_like: feels_like,
            pressure: pressure,
            humidity: humidity,
            wind_speed: wind_speed,
        });
        
        
    }
            
        }).catch((err) => {
             
        console.log(err)
        let city = 'something is wrong (ﾉ◕ヮ◕)';
        let des = null;
        let icon = null;
        let temp = null;
        let feels_like = null;
        let pressure = null;
        let humidity = null;
        let wind_speed = null;

        res.render('index', {
            city: city,
            des: des,
            icon:icon,
            temp: temp,
            feels_like: feels_like,
            pressure: pressure,
            humidity: humidity,
            wind_speed: wind_speed,
        });
        

            
        })
        
    
    // console.log("hello world 9")


});
// console.log("hello world 10")


module.exports = router;