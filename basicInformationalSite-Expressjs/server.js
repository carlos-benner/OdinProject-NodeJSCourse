const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;
//Set static pages (for images, css, frontend js, etc)

app.use('/static', express.static('static'));

//Set view engine to handle view templates
app.use(expressLayouts);
app.set('view engine', 'ejs');

const homePageUrlArray = ['/', '/home', '/index'];
app.get(homePageUrlArray, (req, res) => {
    res.render('index', { title: 'Home' });
});

const aboutPageUrlArray = ['/about', '/about-me'];
app.get(aboutPageUrlArray, (req, res) => {
    res.render('about', { title: 'About Me' });
});

const contactPageUrlArray = ['/contact', '/contact-me'];
app.get(contactPageUrlArray, (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

app.use(function (req, res, next) {
    res.render('404', { title: 'Page not found' });
});

app.listen(port, () => console.log(`App running in port ${port}`));
