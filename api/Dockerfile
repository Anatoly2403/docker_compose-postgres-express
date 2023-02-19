FROM node:16.17.0-alpine

WORKDIR /app

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn

COPY . .

RUN yarn build