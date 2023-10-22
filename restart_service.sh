#!/usr/bin/env bash

docker-compose rm -s -v $1
docker-compose build --no-cache $1
docker-compose up --force-recreate --no-deps -d $1
