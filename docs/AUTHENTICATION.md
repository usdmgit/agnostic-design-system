# :key: Authentication

All Azure Artifacts feeds require authentication, so you'll need to store credentials for the feed before you can install or publish packages. NPM uses `.npmrc` configuration files to store feed URLs and credentials.

We use two `.npmrc` files:

* One `.npmrc` lives at the root of our project adjacent to our project's `package.json`. 
It should contain a "registry" line for your feed and it should not contain credentials since we are storing it on git.

* On your development machine, you need a `.npmrc` in `$HOME` for Linux or Mac systems 
. This `.npmrc` should contain credentials for all of the registries that you need to connect to. The NPM client will look at your project's `.npmrc`, discover the registry,
and fetch matching credentials from `$HOME/.npmrc`. 

Here is the step by step guide of how to set up the authentication:

1. Get the Azure credentials with the responsible for the project.
2. In case you don't have it already, create the credentials file: `touch $HOME/.npmrc`.   
3. Paste the credentials into the `$HOME/.npmrc` file.
4. That's it, now you'll be able to run `npm install`.
