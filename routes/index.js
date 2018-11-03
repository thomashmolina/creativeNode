var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();
var scores = [];
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Sent the html");
    res.sendFile('minesweeper.html', { root: 'public' });
});
router.put('/scores', function(req, res, next) {
    console.log(req.body);
    res.send(req.body);
})
router.get('/scores', function(req, res, next) {
    console.log(res.body);
    res.sendStatus(200);
})
module.exports = router;
