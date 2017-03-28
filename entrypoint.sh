#!/bin/bash
nohup /usr/local/bin/net_speeder eth0 "ip" >/dev/null 2>&1 &

/usr/bin/python /ssr/shadowsocks/server.py "$@"
