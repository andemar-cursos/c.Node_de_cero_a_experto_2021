const express = require('express');

const app = express();

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(8080);