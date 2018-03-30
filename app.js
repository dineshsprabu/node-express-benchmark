const http = require('http');
const express = require('express');
const pmx = require('pmx');
const morgan = require('morgan');

const app = express();

var probe = pmx.probe();

var meter = probe.meter({
  name      : 'req/min',
  samples   : 1,
  timeframe : 60
});

app.set('view engine', 'ejs');

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

app.use((req, res, next) => { meter.mark(); next() });

app.get('/', (req, res) => {
	res.send('ok');
});

app.get('/view', (req, res, next) => {
	res.render('./bench', {});
});

const server = http.createServer(app);

if(process.env.NODE_ENV == undefined){
	console.log("NODE_ENV is missing.");
	process.exit(1);
}

console.log("Environment : " + process.env.NODE_ENV);

server.listen(3000);