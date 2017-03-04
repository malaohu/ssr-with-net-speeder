#!/bin/bash
echo "-Dockerfile by juzeon"
echo "-root password: password"
/etc/init.d/ssh restart
echo "-sshd started"
nohup /usr/local/bin/net_speeder venet0 "ip" >/dev/null 2>&1 &
echo "-net_speeder started"
/usr/bin/python /ssr/shadowsocks/server.py "$@"