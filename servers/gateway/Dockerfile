FROM node:20.5 as BUILDER 

WORKDIR /work/api

RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn set version stable && \
    echo $( yarn --version )

COPY .pnp.cjs .pnp.loader.mjs .yarnrc.yml package.json yarn.lock ./

RUN yarn install 

COPY .meshrc.yml ./

RUN yarn build

CMD ["yarn", "start"]
