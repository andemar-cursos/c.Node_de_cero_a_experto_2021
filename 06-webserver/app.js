require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname  + '/views/partials', () => {});

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andemar',
        titulo: 'Curso de Node',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Andemar',
        titulo: 'Curso de Node',
    });
});


app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Andemar',
        titulo: 'Curso de Node',
    });
});


app.get('*', (req, res) => {
    res.render('404');
})

app.listen(port);