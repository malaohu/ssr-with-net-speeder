var superagent = require('superagent');

require('http').createServer(function(req, res) {  
    superagent.post("https://app.arukas.io/api/login")
    .send({email: "1575550621@qq.com", password: "13611349089"})
    .end((err, sres) => {
        var cookie = sres.header['set-cookie'];
        superagent.get("https://app.arukas.io/api/containers")
        .set("Cookie", cookie)
        .end((err, sres) => {
            var t = sres.text;
            var i = t.indexOf('"container_port":1234');
            var port = t.slice(i+37, i+42);
            var ip = t.slice(i+57, t.indexOf(".jp", i+57)).replace(/-/g, '.');
            res.write("ip :  " + ip + "\n");
            res.write("port: " + port + "\n");
            res.write("pass: 1024\n");
            res.end("crypto: aes-256-cfb\n");
        });
    });
}).listen(1080);
