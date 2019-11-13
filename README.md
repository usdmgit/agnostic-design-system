# AY Design Library

## 👋 Intro


This is the Avison Young's React implementation of the design system. It offers a set of components to speedup the front end development of web applications. 
 
## Summary
- [Getting started](#getting-started)
 - [Running the style guide](#running-the-style-guide)
     - [Requirements](#requirements)
     - [With Docker](#with-docker)
     - [Without Docker](#without-docker)
  - [How this project is structured](#how-this-project-is-structured)
- [Scripts](#scripts)
  - [Shell Scripts](#shell-scripts)
  - [NPM Scripts](#npm-scripts)
- [Publish a new version](#publish-a-new-version)

## Getting started

### Running the project

#### Requirements
See the [authentication](./docs/AUTHENTICATION.md) instructions before you continue.

#### With Docker  

1. Clone the project.
2. Run `cp .env.example .env` and add the environment variables to it
3. Run `sh scripts/dev.sh` to start the Docker container
4. Access http://localhost:6060

#### Without Docker

1. Clone the project
2. Run `cp .env.example .env` and add the environment variables to it
2. Run `npm install` to install all dependencies
3. Start the dev server `npm run start:dev`  
4. Access http://localhost:6060

### How this project is structured

Basic rules:

1. All components live in the `src/components` folder.
2. Only components that will be exported should be directly child of `src/components`, any component for internal use should be inside the component using it.
3. All components being exported should have a `README.md` file inside its folder, it should display examples of how to use the component.


@TODO: add table showing the project structure


We are using [react-styleguidist](https://github.com/styleguidist/react-styleguidist) 
to document and give examples of how to use them. When creating a new component, Styleguidist generates documentation based on the comments in your source code, propTypes declarations, and Readme files. 

## Scripts

We have a set of useful Shell and NPM scripts in this project in order to speedup the development.

### Shell Scripts
- `scripts/buildDocs.sh`: Builds the Docker image with the styleguidist docs.
- `scripts/dockerTagDocs.sh`: Runs the buildDocs process and sends the image to Docker Hub.
- `scripts/dev.sh`: Runs the Docker container and after starts the app.

## Publish a new version

In order to publish a new version of this package take a look [here](./docs/PUBLISH.md).