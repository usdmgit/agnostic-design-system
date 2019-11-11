# :new: Creating a new NPM package 
In order to publish a new Codelitt's private NPM package we're using [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/).

To publish a package you'll need to create a feed first. Feeds host your packages and let you control permissions. 
If you already have a feed created you can skip this step. 
* Login to your MS Azure account and click on the `Artifacts` menu option.
* Click on the `+ Create Feed` button.
* On the create feed page put the name of your package and click on `Create`.

After creating the feed for your new package you'll be redirected to the Getting Started page.
* Click on the `Connect to feed` button. It's at the center of the page.
* On the modal that will open, select the `NPM` option and Copy the registry
* Create a `.npmrc` file at the root of your project and Paste the registry from the previous step.

# :key: Authentication
All Azure Artifacts feeds require authentication, so you'll need to store credentials for the feed
before you can install or publish packages. NPM uses `.npmrc` configuration files to store feed URLs 
and credentials.

We will use two `.npmrc files:

* One `.npmrc` should live at the root of òur project adjacent to our project's `package.json`. 
It should contain a "registry" line for your feed and it should not contain credentials since it 
will be checked into git.

* On your development machine, you will also have a `.npmrc` in `$HOME` for Linux or Mac systems 
or `$env.HOME` for win systems. This `.npmrc` should contain credentials for all of the registries 
that you need to connect to. The NPM client will look at your project's `.npmrc`, discover the registry, 
and fetch matching credentials from `$HOME/.npmrc` or `$env.HOME/.npmrc`. 

In order to generate your credentials you'll need to go to the Azure Connect to feed dialog and 
generate a token. 
Here is the complete guide for generating a new token: 
https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc?view=azure-devops&tabs=mac#linux-or-mac

# :rocket: Publish the artifact
After creating the Feed and setting up the authentication, all you need to do is start the release process with:
```
npm run release
```
It will start an interactive UI that will bump the version and publish the package.
