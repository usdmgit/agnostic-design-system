#!/bin/bash

set -ex

# docker hub username
USERNAME=codelittinc

# image name
IMAGE=ay-design-library

# run build
./scripts/buildDocs.sh

# create the tag
docker tag $IMAGE:latest $USERNAME/$IMAGE:latest

# push it
docker push $USERNAME/$IMAGE:latest
