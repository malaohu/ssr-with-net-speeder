#!/bin/bash
echo "-Dockerfile by juzeon"
echo "-root password: password"
/usr/sbin/sshd restart
echo "-sshd started"
nohup /usr/local/bin/net_speeder venet0 "ip" >/dev/null 2>&1 &
echo "-net_speeder started"
echo "-now start ShadowsocksR"
/usr/bin/python /ssr/shadowsocks/server.py "$@"