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

You can run any NPM script with: 
```shell
npm <script>
```
