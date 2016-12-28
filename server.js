var express = require('express');
var superagent = require('superagent');
var ejs = require('ejs');
var app =   express();
app.use(express.static(__dirname + '/public'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
var args = process.argv.slice(2);
var email = '',pwd = '',token = '',secret = '';     
if(args[0].indexOf('@') > -1)
{
    email   =   args[0];
    pwd     =   args[1]; 
}else
{
    token   =   args[0]; 
    secret  =   args[1]; 
}


appid   =   args[2] || 'all',
images  =   ["malaohu/ssr-with-net-speeder","lowid/ss-with-net-speeder","smounives/shadowsocksr-docker"];


app.get('/', function(req, res) {
    getit(appid,function(err,data){   
        if(err || !data)
            res.send('没有查询到数据。请检查node启动参数是否正确。更多内容请访问：https://github.com/malaohu/ssr-with-net-speeder/tree/arukas');
        else    
            res.render('./index.html',{"data":data || []});
    })
});

function getit_by_token(appid,callback)
{
    superagent.get("https://app.arukas.io/api/containers").auth(token, secret, {type:'auto'})
    .end(function(err,sres){
	    var data = sres.body.data;
        if(err)
            return callback(err,null);
        else
            return deal_data(appid,sres.body.data,callback);
    });
}


function getit(appid,callback)
{
    if(email == '')
        return getit_by_token(appid,callback);
    superagent.post("https://app.arukas.io/api/login")
        .send({email: email, password: pwd})
        .end(function(err,lres){
            if(err)
                return callback(err,null);
            var cookie = lres.header['set-cookie'];
            superagent.get("https://app.arukas.io/api/containers")
            .set("Cookie", cookie)
            .end(function(err,sres){
                if(err)
                    return callback(err,null);
                else
                    return deal_data(appid,sres.body.data,callback);
            })
        })
}

//处理结果信息
function deal_data(_appid,data,callback)
{
    var ret_list = [];
	for (var i = 0; i < data.length; i++)
	{
        if(data[i].id == _appid ||(_appid == 'all' && images.indexOf(data[i].attributes.image_name.replace(/:[^ ]+/,''))>-1) )
        {
	        var jn = data[i];	
            console.log(jn);
            if(!jn.attributes.port_mappings)
                continue;
            for (var j = 0; j < jn.attributes.port_mappings.length; j++)
            {
                var host = jn.attributes.port_mappings[j][0].host;    
                var ip = host.substring(6,host.indexOf(".")).replace(/-/g,".");
                var service_port = jn.attributes.port_mappings[j][0].service_port;
                var container_port = jn.attributes.port_mappings[j][0].container_port;
                var cmd = jn.attributes.cmd;
                var ss_method = '',ss_password = '',ss_port = '',ss_protocol = '',ss_obfs = '';
                //try to get ss method
                if(/-m\s+([^ ]+)/.test(cmd))
                    ss_method = RegExp.$1;
                //try to get ss password
                if(/-k\s+([^ ]+)/.test(cmd))
                    ss_password = RegExp.$1;
                //try to get ss port
                if(/-p\s+([^ ]+)/.test(cmd))
                    ss_port = RegExp.$1;
                //try to get ssr protocol 
                if(/-O\s+([^ ]+)/.test(cmd))
                    ss_protocol = RegExp.$1;
                //try to get ssr obfs 
                if(/-o\s+([^ ]+)/.test(cmd))
                    ss_obfs = RegExp.$1;
                if(ss_port == container_port)
                {
                    var ret_json = {"appid":data[i].id,"server":ip,"server_port":service_port,"password":ss_password,"method":ss_method};
                    if(ss_protocol && ss_obfs)
                    {
                        ret_json["protocol"] = ss_protocol;
                        ret_json["obfs"] = ss_obfs;
                    }
                    ret_list.push(ret_json);
                }
            }
        }
	}
    return callback(null,ret_list);
}

app.get('/:appid',function(req,res){
   var _appid = req.params.appid;
   getit(_appid,function(e,data){
    if(e)
        return res.send(e);
    else
        return res.send(data);
   }); 
})

app.get('/i', function (req, res) {
    res.send('http://51.ruyo.net');
})

app.listen(3999, function () {
  console.log('Example app listening on port 3999')
})
