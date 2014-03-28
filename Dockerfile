FROM debian:jessie
MAINTAINER Nathan Rashleigh "nrashleigh@smokestack.io"

# Install Node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y nodejs-legacy # symlinks node -> nodejs
RUN apt-get install -y npm

# Install modules
ADD . /smokestack
RUN cd /smokestack; npm i;

# Load ENV
RUN source ./env/env.sh

EXPOSE 40080
CMD ["coffee", "/smokestack/src/server/server.coffee"]