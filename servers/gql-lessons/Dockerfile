FROM node:20.5-alpine

WORKDIR /work/api 

COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json yarn.lock ./

RUN yarn install 

COPY src src/

CMD ["yarn", "node", "src/server.js"]
