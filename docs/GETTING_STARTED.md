### Authentication
This project is using Codelitt's private NPM packages. This means that to download or publish any package you need 
to store the credentials.  

1. Get the Azure credentials on the 1password vault. If you don't have access to it talk to the responsible for this project or a manager.  
2. Create the credentials file: `touch $HOME/.npmrc`.   
3. Paste the credentials in the `$HOME/.npmrc` file.  
4. Now you'll be able to run `npm install`.

### How this project is structured

All components are placed in the `src/components` folder. We are usign react-styleguidist to document all components with all it's options and how to use them.

When creating a new component Styleguidist generates documentation based on the comments in your source code, propTypes declarations, and Readme files.

If your component have different properties that will make it look amazing you should add a `README.md` file at the root folder of your component.


### Running the project

#### With Docker  

1. Clone the project.  
2. Start the Docker container with `sh scripts/dev.sh`  
3. Access http://localhost:6060/ 

#### Without Docker   

1. Clone the project.  
2. Install all dependencies with `npm install`.  
3. Start the dev server `npm run dev:start`  
4. Access http://localhost:6060/ 
