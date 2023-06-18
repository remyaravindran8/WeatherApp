
const express = require("express");
const properties = require("../package.json");
const cors = require('cors');


const aboutRoute = express.Router();

aboutRoute.get("/", (req, res)=>{
    const aboutInfo ={
        name: properties.name,
        description: properties.description,
        Functionality: properties.Functionality
    }
    res.json(aboutInfo)
})

module.exports = aboutRoute