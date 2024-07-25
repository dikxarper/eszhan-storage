const express = require('express');
const app = express();
require('dotenv').config({path: './config/.env'});

app.get('/', (req, res) => {
    res.send("This is server!")
})

app.listen(process.env.PORT, function() {
    console.log(`The server is on http://localhost:${process.env.PORT}`);
})