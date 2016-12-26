# 注意该源码不是部署SSR

本代码是部署一个NODEJS项目，自动获取arukas的IP和端口的。
Start
### 部署方法
```
镜像：malaohu/ssr-with-net-speeder-arukas
端口:3999 TCP
CMD : node /app/server.js xxxx@gmail.com password xxxxx-appid-xxxxxx

```

详细说明一下CMD中的命令。
xxxx@gmail.com  是arukas注册邮箱。
password 是arukas登录密码。
xxxxx-appid-xxxxxx 是你要获取IP和端口的APPID （也可以输入all）
你建立的APP都有一个ID。例如：
ID	fd9b708e-9a2c-45a0-b81c-620944369c2d

该ID必须在你的账号下才能访问。
如果你输入的appid 是 all。会自动获取你账号下的所有镜像。
["malaohu/ssr-with-net-speeder","lowid/ss-with-net-speeder","lowid/ss-with-net-speeder:latest","smounives/shadowsocksr-docker"]
