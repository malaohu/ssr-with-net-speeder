# ssr-with-net-speeder-multi

## docker运行命令：
	docker run -d --name ssr-with-net-speeder -P juzheng/ssr-with-net-speeder-multi:debian -s 0.0.0.0 -p 25565 -k password -m rc4-md5 -o http_simple -O auth_sha1
## 默认执行：
	/usr/bin/python /ssr/shadowsocks/server.py -s 0.0.0.0 -p 25565 -k password -m rc4-md5 -o http_simple -O auth_sha1
## SSH信息：
用户：root
密码：password
端口：22