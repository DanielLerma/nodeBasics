// const express = require('express');
// const app = express();
module.exports = function (app) {
    app.get('/api/noticias', (req, res) => {
        res.send('Here they are (:');
    });
};