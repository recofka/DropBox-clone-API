const express = require('express');
const routes = express.Router();
const BoxController = require('./controllers/BoxController');


routes.get("/", (req, res) =>{
    return res.send("basic server is running")
});

routes.post("/boxes", BoxController.store);

module.exports = routes;