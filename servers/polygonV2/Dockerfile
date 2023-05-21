FROM node:18-slim

WORKDIR /home/app/polygonV2

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5003

CMD [ "npm", "start" ]