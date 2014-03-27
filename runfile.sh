#!/bin/bash

CONTAINER_ID=smokestack/splash
PORT_NUMBER=40080

# bind external port to the express listen port
docker run -d -p 127.0.0.1:$PORT_NUMBER:40080 -p 127.0.0.1:$PORT_NUMBER:40080/udp $CONTAINER_ID