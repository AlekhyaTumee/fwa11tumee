var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value1 = search_params.get("x")
        value2 = search_params.get("y")
        if(value1 === null)
        {
            value1=Math.round(Math.random()*900);
        }
        if(value2 === null)
        {
            value2=Math.round(Math.random()*900);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.pow() applied to ' + value1 +' , '+value2 + ' is ' + Math.pow(value1,value2))
        res.write('<br/>Math.sign() applied to ' + value1 + ' is ' + Math.sign(value1))
        res.write('<br/>Math.tanh() applied to ' + value2 + ' is ' + Math.tanh(value2))
        res.write('<br/>Math.trunc() applied to ' + value1 + ' is ' + Math.trunc(value1))
        res.end()
    } 
});

module.exports = router;
