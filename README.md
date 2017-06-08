# 该分支代码不再做大的更新了。请大家访问新的项目代码。 https://github.com/malaohu/Arukas-API

# 特别说明

本分支代码不是部署 SSR/SS 

SS： https://github.com/malaohu/ss-with-net-speeder

SSR： https://github.com/malaohu/ssr-with-net-speeder


# 关于项目
本分支是部署一个WEB项目采用Nodejs编码，实时自动获取Arukas的Ip和Port的。

演示地址：https://free-shadowsocks.arukascloud.io/

### 部署步骤
```
镜像：malaohu/ssr-with-net-speeder-arukas
端口:3999 TCP

#推荐使用密钥启动
CMD : node /app/server.js token secret xxxxx-appid-xxxxxx

#也可以使用邮箱和密码启动
CMD : node /app/server.js xxxx@gmail.com password xxxxx-appid-xxxxxx

```

### 参数说明
**强烈推荐使用Token启动项目**

详细说明一下CMD中的命令。

#### 密钥方式

使用密钥方式，访问速度会更快一些。像Github 第三方登录也可以使用。

token 和 secret 获取地址：

https://app.arukas.io/settings/api-keys


#### 邮箱密码方式

不太推荐该方式。

xxxx@gmail.com  是arukas注册邮箱。

password 是arukas登录密码。

#### appid

appid 参数可以不传，那么就是获取所有APPID且可识别镜像的信息。


你建立的APP都有一个ID。例如：
ID	fd9b708e-9a2c-45a0-b81c-620944369c2d



### 支持识别的镜像

*/ssr-with-net-speeder

*/ss-with-net-speeder

*/shadowsocksr-docker
