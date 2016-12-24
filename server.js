var express = require('express');
var superagent = require('superagent');

var app = express()

app.get('/', function (req, res) {
    superagent.post("https://app.arukas.io/api/login")
        .send({email: "yourmail@gmail.com", password: "yourArukasPassword"})
        .end(function(lres){
             var cookie = lres.header['set-cookie'];
            superagent.get("https://app.arukas.io/api/containers")
            .set("Cookie", cookie)
            .end(function(sres){
                res.send(sres.body);
            })
        })
})

app.listen(80, function () {
  console.log('Example app listening on port 80')
})
