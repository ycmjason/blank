const path = require('path');
const express = require('express');
const app = express();

const STATIC_PATH = path.join(__dirname, '../static');

app.use(express.static(STATIC_PATH));
app.all('*', (req, res) => res.sendFile(path.join(STATIC_PATH, 'index.html')));

module.exports = app;
