module.exports = {
    hello: function(req, res) {
        if (!req.body.name) {
            res.send('An error ocurred: Name is a required parameter!');
        }
    }
}