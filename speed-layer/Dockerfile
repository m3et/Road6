FROM node:lts-alpine
# RUN apt-get update && apt-get upgrade -y

# RUN apk --no-cache add \
#       bash \
#       g++ \
#       ca-certificates \
#       lz4-dev \
#       musl-dev \
#       cyrus-sasl-dev \
#       openssl-dev \
#       make \
#       python

# RUN apk add --no-cache --virtual .build-deps gcc zlib-dev libc-dev bsd-compat-headers py-setuptools bash

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]