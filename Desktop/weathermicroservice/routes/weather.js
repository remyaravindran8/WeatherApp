const express = require("express");
const https = require('https');
const cors = require('cors');


const weatherRoute = express.Router();
weatherRoute.get("/", (req, res)=>{
    res.sendFile(__dirname, + "index.html")   
})

weatherRoute.post("/", (req, res)=>{
        const city = req.body.cityName
        const appiKey = "Your API Key" 
        const unit = req.body.unit

        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&amp;appid="+appiKey+"&amp;units="+unit+""
        https.get(url, (response)=>{
            response.on("data", (chunk)=>{
                const responseData = JSON.parse(chunk);
                const temperature = unit;
              //  const weatherDes = responseData.weather[0].description;
                //const icon = responseData.weather[0].icon;
              //  const imageURL = "http://openweathermap.org/img/wn/" + "@2x.png";
                const cityName = responseData.name;
                res.write(`The weather is ${temperature} degree celsius in ${city}.`)
                res.send()
            })
        })
});

weatherRoute.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;
    var response;// Replace with your actual API key

    // Make a request to the weather API
    var request = require('request');
    var options = {
      'async': false,
      'method': 'GET',
      'url': 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=384f65ebec5d13ba19b0b0048deeb6d5',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      var details = JSON.parse(response.body);
      res.json(details);
      res.send()
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = weatherRoute