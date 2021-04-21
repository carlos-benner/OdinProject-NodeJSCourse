const http = require('http');
const url = require('url');
const fs = require('fs');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    let q = url.parse(req.url, true).query;
//    let txt = q.year + ' ' + q.month;
//    res.end(txt);
//}).listen(8080);

//fs examples
//http.createServer(function (req, res) {
//    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//        if (err) throw err;
//        console.log('Saved!');
//    });
//
//    fs.open('mynewfile2.txt', 'w', function (err, file) {
//        if (err) throw err;
//        console.log('Saved!');
//    });
//
//    try {
//        fs.readFile('demofile1.html', function (err, data) {
//            if (!err) {
//                res.writeHead(200, { 'Content-Type': 'text/html' });
//                res.write(data);
//            } else {
//                console.log(err);
//            }
//            return res.end();
//        });
//    } catch (error) {
//        console.log(error);
//    }
//}).listen(8080);

//url examples
//let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//let q = url.parse(adr, true);
//
//console.log(q.host); //returns 'localhost:8080'
//console.log(q.pathname); //returns '/default.htm'
//console.log(q.search); //returns '?year=2017&month=february'
//
//let qdata = q.query; //returns an object: { year: 2017, month: 'february' }
//console.log(qdata.month); //returns 'february'

//http.createServer(function (req, res) {
//    var q = url.parse(req.url, true);
//    var filename = '.' + q.pathname;
//    fs.readFile(filename, function (err, data) {
//        if (err) {
//            res.writeHead(404, { 'Content-Type': 'text/html' });
//            return res.end('404 Not Found');
//        }
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        res.write(data);
//        return res.end();
//    });
//}).listen(8080);

//package use example

//let uc = require('upper-case');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.write(uc.upperCase('Hello World!'));
//    res.end();
//}).listen(8080//

//events examples

//let rs = fs.createReadStream('./demofile1.html');
//rs.on('open', function () {
//    console.log('The file is open');
//});
//
//let events = require('events');
//let eventEmitter = new events.EventEmitter();
//
////Create an event handler:
//var myEventHandler = function () {
//    console.log('I hear a scream!');
//};
//
////Assign the event handler to an event:
//eventEmitter.on('scream', myEventHandler);
//
////Fire the 'scream' event:
//eventEmitter.emit('scream');

//You can run multiple servers applications at the same time

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

const server2 = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    res.end('Hello World22222\n');
});

const hostname = '127.0.0.1';
const port = 8000;

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

server2.listen(8081, hostname, () => {
    console.log(`Server running at http://${hostname}:${8081}/`);
});
