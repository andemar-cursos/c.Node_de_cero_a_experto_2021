const express = require('express');
const app = express();

// TODO: require('hbs');
app.set('view engine', 'hbs');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andemar',
        titulo: 'Curso de Node',
    });
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})


app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(8080);