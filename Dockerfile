FROM readytalk/nodejs
WORKDIR /app
RUN sed  's/___EMAIL/$EMAIL/g'  index.html
RUN sed  's/___PWD/$PWD/g'  index.html
RUN sed  's/___APPID/$APPID/g'  index.html
COPY server.js /app/
COPY package.json /app/
RUN npm install
