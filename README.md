# AY Design Library

This library will be used in the react projects for Avison Young. It has a set of components to speedup the development 
of the front-end applications.

- [Getting started](#getting-started)
  - [Running the project](#running-the-project)
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
2. Create an `.env` file from the `.env.example`
3. Start the Docker container with `sh scripts/dev.sh`  
4. Access http://localhost:6060/ 

#### Without Docker

1. Clone the project.  
2. Install all dependencies with `npm install`  
3. Start the dev server `npm run dev:start`  
4. Access http://localhost:6060/ 

### How this project is structured

All components live in the `src/components` folder. We are using [react-styleguidist](https://github.com/styleguidist/react-styleguidist) 
to document all components with all its options and how to use them. When creating a new component, Styleguidist generates 
documentation based on the comments in your source code, propTypes declarations, and Readme files. 

If you're developing a new component that has different properties that will make it look amazing, you should add a 
`README.md` file at the root folder of your component with some examples of how to use it.

## Scripts

We have a set of useful Shell and NPM scripts in this project in order to speedup the development.

### Shell Scripts
- `scripts/buildDocs.sh`: Builds the Docker image with the styleguidist docs.
- `scripts/dockerTagDocs.sh`: Runs the buildDocs process and sends the image to Docker Hub.
- `scripts/dev.sh`: Runs the Docker container and after starts the app.

You can run any shell script with: 
```shell
sh <script>
```

### NPM Scripts

The project comes with multiple `package.json` scripts created to run useful commands.

- `dev:start`: Starts the styleguidist server.
- `docker:dev`: Starts the styleguidist server under the Docker container.
- `prod:build`: Builds the Components for production.
- `docs:prod:build`: Builds the styleguidist Docs for production.
- `docs:docker:build`: Builds the Docker image with the styleguidist docs.
- `docs:docker:tag`: Builds the image with the styleguidist docs and push a tag to Docker Hub.
- `lint`: Runs the eslint tool
- `lint:fix`: Runs the eslint tool and fix possible offenses.
- `test`: Runs all tests
- `test:updateSnapshot`: Updates all snapshots used in tests.
- `test:watch`: Launches the test runner in the interactive watch mode.
- `release`: It will start an interative UI to publish the package.

You can run any NPM script with: 
```shell
npm <script>
```

## Publish a new version

In order to publish a new version of this package take a look [here](./docs/PUBLISH.md).
