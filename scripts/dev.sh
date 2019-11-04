#!/bin/sh

docker-compose up -d
docker exec -it ay-design-library-app npm run dev:start
