# Container 1 ----------- Get the dependencies ---------------
FROM node:12

# Provide a stable command environment
SHELL ["/bin/sh", "-c"]

# Create a working directory
RUN mkdir /usr/tuneish
WORKDIR /usr/tuneish

# get the production dependencies
COPY ./package.json .

# Add the global dependencies that do not exist in here
RUN yarn add --dev @babel/core babel-preset-gatsby gatsby-cli

# install everything else
RUN yarn install

# Container 2 ----------- Build the app ----------------------

# Move the files to compile into the container
COPY ./src ./src
COPY ./gatsby-browser.js .
COPY ./gatsby-config.js .
COPY ./gatsby-ssr.js .
COPY ./loadershim.js .
COPY ./.babelrc .


RUN ls -la

# Assemble the ./public production folder
RUN npx gatsby build

# Container 3 ----------- Serve the app ----------------------

EXPOSE 9000

CMD ["npx", "gatsby", "serve"]
