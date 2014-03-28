FROM debian:jessie
MAINTAINER Nathan Rashleigh "nrashleigh@smokestack.io"

# Install Node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

# Install modules
ADD . /smokestack
RUN cd /smokestack; npm i;

# Append to $PATH variable.
ENV PATH /smokestack/node_modules/.bin:$PATH

EXPOSE 40080
CMD ["coffee", "/smokestack/src/server.coffee"]