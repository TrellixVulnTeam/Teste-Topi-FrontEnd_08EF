const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;

const app = express();

app.use(express.static(`${__dirname}/dist/${nomeApp}`));
//   'index.html', {root: './Teste-Topi-FrontEnd/'}));

app.get('/*', (req, res) => res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`)));
//   'index.html', {root: './Teste-Topi-FrontEnd/'}));

app.listen(process.env.PORT || 8080);