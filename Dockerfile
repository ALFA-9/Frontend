# build env
FROM node:20.10.0-alpine3.19 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
# RUN npm run build
# RUN npm install --global http-server

CMD ["npm", "run", "build"]