# DEVELOPMENT dockerfile.

FROM node:12.13.0

ARG AZURE_REGISTRY_USERNAME
ARG AZURE_REGISTRY_PASSWORD
RUN apt-get update

WORKDIR /share

COPY --chown=node .npmrc.example ./.npmrc
COPY --chown=node package*.json ./

RUN npm install

ADD ./ /share

RUN npm i -g react-scripts

EXPOSE 6060
