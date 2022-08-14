FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV CHOKIDAR_USEPOLLING=true

ENV WATCHPACK_POLLING=true

CMD ["npm", "start"]