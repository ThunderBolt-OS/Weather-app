  
const router = require('express').Router();
const axios = require('axios');
// ?const fetch = require('node-fetch');
require('dotenv').config()

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', async (req, res) => {
    console.log(req.body)
    
    const city = req.body.city;
    console.log(city);
    const url_api = `https://api.openweathermap.org/data/2.5/weather?q=`+ city +`&appid=f8479523969c89afd226b37fa696839e`
    console.log(url_api)

    try {
        axios.get(url_api).then(resp => {

            console.log(resp.data);
            // consol
         });
        
    } catch(err) {
        
    }

})

module.exports = router;