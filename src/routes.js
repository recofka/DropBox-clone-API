const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) =>{
    return res.send("basic server is running")
});

module.exports = routes;