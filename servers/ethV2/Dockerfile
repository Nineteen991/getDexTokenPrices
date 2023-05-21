FROM node:18-slim 

WORKDIR /home/app/ethV2

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 5002

CMD [ "npm", "start" ]