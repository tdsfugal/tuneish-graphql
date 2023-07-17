FROM node:20-alpine AS modern-yarn

RUN corepack enable 
RUN corepack prepare yarn@stable --activate

FROM modern-yarn AS deps 

CMD ["yarn", "-v"]

