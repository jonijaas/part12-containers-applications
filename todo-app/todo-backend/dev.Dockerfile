FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

ENV DEBUG=todo-backend:*

ENV CHOKIDAR_USEPOLLING=true

USER node

CMD ["npm", "run", "dev"]