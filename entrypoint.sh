#!/bin/bash
echo "-Dockerfile by juzeon"
echo "-root password: password"
/usr/sbin/sshd restart
echo "-sshd started"
nohup /usr/local/bin/net_speeder venet0 "ip" >/dev/null 2>&1 &
echo "-net_speeder started"
echo "-default run '/usr/bin/python /ssr/shadowsocks/server.py -s 0.0.0.0 -p 25565 -k password -m rc4-md5 -o http_simple -O auth_sha1'"