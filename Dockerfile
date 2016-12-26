FROM readytalk/nodejs
WORKDIR /app
WORKDIR /app/views
WORKDIR /app/public
COPY server.js /app/
COPY package.json /app/
COPY index.html /app/views
COPY css.css /app/public
RUN npm install
