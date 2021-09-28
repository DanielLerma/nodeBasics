module.exports = function (app) {
    app.get('/api/users', (req, res) => {
        res.send('Here they are 2.0 (:');
    })
}