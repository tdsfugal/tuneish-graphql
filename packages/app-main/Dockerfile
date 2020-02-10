FROM node:10-alpine

ENV NODE_ENV=production
ENV GQL_URL=/api/v1
ENV GATSBY_API_URI=/api/v1
ENV SERVE_PORT=3000
ENV CORS_ADDRESS=https://yourdomain.com
ENV DATABASE_URL=mongodb://172.16.32.7:27017/progressions

COPY ./ /opt/app
RUN apk add --no-cache --virtual .gyp python make g++
RUN npm install --global gatsby-cli

WORKDIR /opt/app
RUN npm install
RUN npm run build

EXPOSE 8000/tcp

CMD npm run serve
