# :new: Creating a new NPM package 
In order to publish a new private NPM package we're using [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/).

If you already have an Azure registry for this project, you can skip this step.

To publish a package you need to create a feed first. A Feed hosts your packages and let you control permissions for them.

1. Access your Azure account and click on the `Artifacts` menu option.
2. Click on the `+ Create Feed` button.
3. On the create feed page put the name of your package and click on `Create`.

After creating the feed for your new package you'll be redirected to the Getting Started page.

4. Click on the `Connect to feed` button. It's at the center of the page.
5. On the modal that will open, select the `NPM` option and Copy the registry
6. Create a `.npmrc` file at the root of your project and paste the registry from the previous step.

# :rocket: Publish the artifact
After creating the Feed and setting up the [authentication](./AUTHENTICATION.md), all you need to do is start the release process with:
```
npm run release
```
It will start an interactive UI that will bump the version and publish the package.
