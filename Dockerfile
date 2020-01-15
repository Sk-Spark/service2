FROM node:12.14.1-slim

WORKDIR /app

COPY ./src          /app/src
COPY ./public       /app/public
COPY package.json   /app
COPY .env           /app

RUN npm i

EXPOSE 3001

CMD npm start