const express = require('express');

const app = express();

app.use.apply(express.json());
app.get("/", (req, res) =>{
    return res.send("basic server is running")
});

app.listen(5000);