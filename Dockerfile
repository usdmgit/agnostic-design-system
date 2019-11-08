# DEVELOPMENT dockerfile.

FROM node:12.13.0

ARG AZURE_REGISTRY_USERNAME
ARG AZURE_REGISTRY_PASSWORD

RUN apt-get update

WORKDIR /share

ADD ./ /share

RUN sh scripts/writeAzureRegistry.sh
RUN npm install

EXPOSE 6060
