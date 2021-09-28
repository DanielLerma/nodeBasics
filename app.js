const noticiasRoutes = require('./src/app/routes/noticias');
const userRoutes = require('./src/app/routes/users');
const express = require('express');

let app = express();

app.listen(3000, () => {
    console.log('App is listening in port 3000');
});

app.get('/', (req, res) => {
    res.send('works fine! a bit fine').status(200);
})

app.get('/api', (req, res) => {
    res.send('works from api!');
})
// middlewares - no son endpoints fijos
app.use('/test', (req, res, next) => {
    if (res.query.test) {
        next();
    }
    else {
        res.status(401).send;
    }
})

app.get('/test', (req, res) => {
    res.send('test endpoint');
})

noticiasRoutes(app);
userRoutes(app);