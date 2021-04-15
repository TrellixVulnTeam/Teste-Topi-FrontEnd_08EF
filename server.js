const express = require('express');
const path = require('path');


const app = express();

app.use(express.static('index.html', {root: './dist/TESTE-TOPI-FRONTEND/'}));

app.get('/*', (req, res) => res.sendFile('index.html', {root: './dist/TESTE-TOPI-FRONTEND/'}));

app.listen(process.env.PORT || 8080);