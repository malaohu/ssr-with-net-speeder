FROM 1.7-alpine
MAINTAINER juzeon <master@skyju.cc>

#ENV TZ "Asia/Shanghai"
#RUN echo "https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/main" > /etc/apk/repositories

RUN apk update && \
    apk add --no-cache openssh python py-pip python-dev py-crypto libnet-dev libpcap-dev libcap-dev git gcc libffi-dev openssl-dev musl-dev

RUN echo "root:password"|chpasswd
RUN git clone -b manyuser https://github.com/breakwa11/shadowsocks.git ssr
RUN git clone https://github.com/snooda/net-speeder.git net-speeder
WORKDIR net-speeder
RUN sh build.sh

RUN mv net_speeder /usr/local/bin/
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/net_speeder
EXPOSE 25565
EXPOSE 22
# Configure container to run as an executable
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
