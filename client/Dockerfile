# dev env
FROM node:14.5-alpine as dev

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./

RUN yarn install

COPY . /app

RUN yarn run build

# prod env
FROM nginx:1.18-alpine

COPY --from=dev /app/dev /usr/share/nginx/html

EXPOSE 80

CMD ["yarn", "start"]

