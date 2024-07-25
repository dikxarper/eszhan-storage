const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config({path: './config/.env'});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/views', express.static(path.join(__dirname + '/views')));
app.use('/public', express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT, function() {
    console.log(`The server is on http://localhost:${process.env.PORT}`);
})