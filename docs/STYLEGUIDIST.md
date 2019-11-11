This library has a set of components to speedup the development of the front-end applications for Avison Young.

## How to install

### Requirements
This project is using Codelitt's private NPM registry, which means that to download or publish any package, you need to 
store the credentials:

1. Get the Azure credentials on the 1password vault. If you don't have access to it talk to the responsible for this 
project or a manager.  
2. Create the credentials file: `touch $HOME/.npmrc`.   
3. Paste the credentials in the `$HOME/.npmrc` file.  
4. Now you'll be able to install this library.

### Intallation
After setting up the NPM registry authentication, all you need to do is: 

```shell
npm install @codelitt/ay-desing-library
```
