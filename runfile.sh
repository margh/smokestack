#!/bin/bash

CONTAINER_ID=smokestack/splash
EXT_PORT=40080

# bind external port to the express listen port
docker run -d -p 127.0.0.1:$EXT_PORT:8080 $CONTAINER_ID