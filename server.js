const express = require('express')
const https = require('https');
const http = require('http');
const compression = require('compression');
const cors = require('cors');

const app = express()

const port = process.env.port || 4008;


app.use(cors())
app.use(compression());

app.use(express.static('public/dist'));

const nodeServer = app.listen(port, () => console.log(`Example app listening on  http://localhost:${port}/`))