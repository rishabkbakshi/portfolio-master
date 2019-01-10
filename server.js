const express = require('express')
const https = require('https');
const http = require('http');

const app = express()

const port = 3009

app.use(function (req, res, next) {
    console.log('req: ', req.method, ' for: ', req.url);
    next();
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3007/');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.static('public/dist'));

const nodeServer = app.listen(port, () => console.log(`Example app listening on  http://localhost:${port}/`))