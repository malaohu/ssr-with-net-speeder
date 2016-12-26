FROM readytalk/nodejs
WORKDIR /app
COPY server.js /app/
COPY package.json /app/
COPY index.html /app/
COPY css.css /app/
RUN npm install
