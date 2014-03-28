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

EXPOSE 40080
CMD ["/smokestack/begin.sh"]