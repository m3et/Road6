FROM ubuntu:18.04

RUN  apt-get update -qqy \
      && apt-get install -y --no-install-recommends \
      build-essential \
      node-gyp \
      nodejs-dev \
      libssl1.0-dev \
      liblz4-dev \
      libpthread-stubs0-dev \
      libsasl2-dev \
      libsasl2-modules \
      make \
      python \
      nodejs npm ca-certificates \
      && rm -rf /var/cache/apt/* /var/lib/apt/lists/*

# use changes to package.json to force Docker not to use the cache
# when we change our application's nodejs dependencies:
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /usr/app
ADD . /usr/app

ENV LD_LIBRARY_PATH=/usr/src/app/node_modules/node-rdkafka/build/deps
ENTRYPOINT [ "node", "app.js" ]
CMD [ "" ]