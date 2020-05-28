const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./home/index.html', { root: __dirname });
});

app.get('/mamnoonstreet', (req, res) => {
    res.sendFile('./home/order-mamnoon-street.html', { root: __dirname });
});

app.get('/mamnoon', (req, res) => {
    res.sendFile('./home/order-mamnoon.html', { root: __dirname });
});

app.get('/mbar', (req, res) => {
    res.sendFile('./home/order-mbar.html', { root: __dirname });
});


app.listen(port, () => console.log(`listening on port ${port}!`))