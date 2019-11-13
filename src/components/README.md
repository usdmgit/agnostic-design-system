# Components

The components are elements from our Design System, such as Buttons, Inputs and Cards.

## Creating a Component

### Folders structure 
Every component must have its own folder under the `src/components` directory.

Example: let's suppose you need a new _Button_ component. You just need to create a Button folder for it:
```
src/components/Button/
```

If a new component needs subcomponents, you must create subfolders inside your component's folder.  

Example: the Button is a wrapper for two different buttons, a PrimaryButton and a SecondaryButton:
```
src/components/Button/
src/components/Button/PrimaryButton/
src/components/Button/SecondaryButton/
```

### Naming
All components must be exported by an `index.tsx` file.  
Example: when creating a Button component:
```
src/components/Button/index.tsx
```

### Styles
We are using css-modules to style our components, so every component must have its own stylesheet.  

Using the Button example:
```
src/components/Button/index.tsx
src/components/Button/Button.module.scss
```

### Documentation
We are using [react-styleguidist](https://github.com/styleguidist/react-styleguidist) 
to document components and give examples of how to use them. When creating a new component, Styleguidist generates documentation 
based on the comments in your source code, propTypes declarations, and Readme files. 

Using the Button example again, you'll need to add a README.md file to its folder, with examples and docs explaining how to use it:
```
src/components/Button/index.tsx
src/components/Button/Button.module.scss
src/components/Button/README.md
```

## Exporting a new component

After creating a new component you need to export it on the `src/index.tsx` file. 
Only components exported by this file will be available in the distributable build of this project.
