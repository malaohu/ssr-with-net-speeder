# ssr-with-net-speeder

FROM ubuntu:14.04.3
MAINTAINER malaohu <tua@live.cn>

RUN apt-get update && \
apt-get clean  && \
apt-get install -y python python-pip python-m2crypto libnet1-dev libpcap0.8-dev git gcc curl && \
apt-get clean

#RUN git clone -b manyuser https://github.com/breakwa11/shadowsocks.git ssr
#RUN git clone https://github.com/snooda/net-speeder.git net-speeder
#WORKDIR net-speeder
#RUN sh build.sh

#RUN mv net_speeder /usr/local/bin/
#COPY entrypoint.sh /usr/local/bin/
#RUN chmod +x /usr/local/bin/entrypoint.sh
#RUN chmod +x /usr/local/bin/net_speeder

#install nodejs npm
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash
RUN apt-get install nodejs -y
RUN node -v
RUN npm -v

#install pm2 
WORKDIR ~/
RUN npm install -g pm2
RUN mkdir wwwroot
COPY server.js wwwroot
COPY package.json wwwroot
WORKDIR wwwroot
RUN npm install
#RUN pm2 start server.js

# Start Net Speeder
#CMD ["nohup /usr/local/bin/net_speeder venet0 \"ip\" >/dev/null 2>&1 &"]

#Test 
#CMD ["ping www.baidu.com -c 5"]


# Configure container to run as an executable
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
