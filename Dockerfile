FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm cache clean --force && npm install

COPY . .

ENV PORT 80
EXPOSE 80

RUN npm run build
