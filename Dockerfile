FROM node:18-alpine

ENV NODE_ENV dev


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["sh", "-c", "npm run start:${NODE_ENV}"]