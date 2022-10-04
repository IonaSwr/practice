const express = require('express');
const vhost = require('vhost');
const http = require('http');

var app = express();
app.use(vhost('localhost',express.static('client')));
http.createServer(app).listen(8002);