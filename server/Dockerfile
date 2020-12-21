FROM node:14.5-alpine AS dev

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --only=dev

COPY . .

RUN yarn run build

FROM node:14.5-alpine AS prod

ARG NODE_ENV=prod

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --only=prod

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

EXPOSE  8080

CMD ["node", "dist/main"]
