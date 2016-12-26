FROM readytalk/nodejs
WORKDIR /app
COPY server.js /app/
COPY package.json /app/
COPY index.html /app/
RUN npm install
