# ssr-with-net-speeder

FROM ubuntu:14.04.3
MAINTAINER malaohu <tua@live.cn>

RUN apt-get update && \
apt-get install -y  curl && \
apt-get clean


#install nodejs npm
RUN curl -sL https://deb.nodesource.com/setup_0.12 | bash
RUN apt-get install nodejs -y
RUN node -v
RUN npm -v

#install pm2 
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
