FROM readytalk/nodejs
WORKDIR /app
COPY server.js /app/
COPY package.json /app/
RUN npm install
RUN node server.js
