FROM node:lts-alpine

RUN apk --no-cache add \
      bash \
      g++ \
      ca-certificates \
      lz4-dev \
      musl-dev \
      cyrus-sasl-dev \
      openssl-dev \
      make \
      python

RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools bash

WORKDIR /usr/app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .


EXPOSE 9094 8080

ENTRYPOINT [ "node", "app.js" ]
CMD [ "" ]