const http = require('http');
const url = require('url');
const fs = require('fs');

const pageLayout = fs.readFileSync('layout.html');
const stylePage = fs.readFileSync('./static/style.css');

http.createServer((req, res) => {
    let pageContent = pageLayout.toString();
    let parsedURL = url.parse(req.url);
    switch (parsedURL.pathname.toLowerCase()) {
        case '/':
        case '/index':
        case '/home':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('./static/index.html', (err, data) => {
                pageContent = pageContent
                    .replace('{{title}}', 'Home')
                    .replace('{{content}}', data);
                res.write(pageContent);
                return res.end();
            });
            break;
        case '/about':
        case '/about-me':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('./static/about.html', (err, data) => {
                pageContent = pageContent
                    .replace('{{title}}', 'About me')
                    .replace('{{content}}', data);
                res.write(pageContent);
                return res.end();
            });
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('./static/contact.html', (err, data) => {
                pageContent = pageContent
                    .replace('{{title}}', 'Contact me')
                    .replace('{{content}}', data);
                res.write(pageContent);
                return res.end();
            });
            break;
        case '/static/style.css':
            res.write(stylePage);
            return res.end();
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });

            return res.end('404');
            break;
    }
}).listen(8080);

function loadPage(page) {
    fs.readFile('layout.html', function (err, data) {
        return data;
    });
}
