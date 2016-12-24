var express = require('express');
var superagent = require('superagent');

var app = express()

app.get('/', function (req, res) {
  getinfo(function(obj){
    res.send(obj)
  })
})

//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})

function getinfo(callback)
{
    superagent.post("https://app.arukas.io/api/login")
    .send({email: "$email", password: "$pwd"})
    .end((err, sres) => {
        var cookie = sres.header['set-cookie'];
        superagent.get("https://app.arukas.io/api/containers")
        .set("Cookie", cookie)
        .end((err, sres) => {
            var t = sres.text;
            var i = t.indexOf('"container_port":1234');
            var port = t.slice(i+37, i+42);
            var ip = t.slice(i+57, t.indexOf(".jp", i+57)).replace(/-/g, '.');
            //res.write("ip :  " + ip + "\n");
            //res.write("port: " + port + "\n");
            //res.write("pass: 1024\n");
            //res.end("crypto: aes-256-cfb\n");
            callback({"ip":ip,"port":port});
        });
    });
}
