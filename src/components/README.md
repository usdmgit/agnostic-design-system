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

All components expose a property named `wrapperClassName` which allows you to send a custom style for that component.

Using the Button example:
```
<Button
  type="main"
  label="The Button Label"
  onClick={action('button clicked')}
  wrapperClassName={style.classToApply}
/>
```

### Documentation
We are using [storybook](https://storybook.js.org/) 
to document components and give examples of how to use them. When creating a new component, Storybook generates documentation 
based on story files. 

Using the Button example, you need to add a `Button.stories.tsx` file to its folder, with examples and docs explaining how to use it:
```
src/components/Button/index.tsx
src/components/Button/Button.module.scss
src/components/Button/Button.stories.tsx
```

#### Namespace

Every story starts with a namespace. The namespace is divided into Title, Component and Stories:
```javascript
import {storiesOf} from '@storybook/react';

// Title: UI Components
// Component: Button
storiesOf('UI Components|Button', module);

// Stories
stories.add('Main', ()=> {...})
stories.add('Secondary', ()=> {...})
```

The example above creates the following structure:
```
UI Components
|__Button
|____Main
|____Secondary
```

If you want to group different components under the same title, you just need to start your story with the same namespace:
```javascript
storiesOf('UI Components|Modal', module);
```
```
UI Components
|__Button
|____Main
|____Secondary
|
|__Modal
```

#### Stories
Each story represents a visual state of a component. 
Technically, a story is a function that returns something that can be rendered to screen.

Here is an example of stories for a _Button_ component:

```
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import Button from "./";

const stories = storiesOf('Components|Button', module);

stories.add(
  'Main button', 
  () => <Button type="main" />, 
  { 
    order: 1,
    info: "Use type main for rendering buttons with the main background color"  
  }
);

stories.add(
  'Secondary button', 
  () => <Button type="secondary" />, 
  { 
    order: 2,
    info: "Use type secondary for rendering buttons with the secondary background color"  
  }
);

```

You can add examples calling the `stories.add(...` function. It accepts 3 parameters:
1. The Name of the story.
2. A function that renders the component.
3. An object parameter. The main parameters that every story must have are:  
  3.1. **Order**: the order is responsible for ordering the stories in the Storybook menu.  
  3.2. **Info**: the info is a string that is parsed as a Markdown text. Here you can add usage instructions and all information helpful for using a component.

#### Guideline

##### The goal of these guidelines is to make your documentation:

- Useful
- Readable
- Trustworthy

##### Best practices

* **Add the Story info**  

  All stories must have an **info** text property that explains how to use the component.
  You can write it in the markdown format:
  ```javascript
  stories.add(
    'Button', 
    () => <Button type="main" />, 
    { 
      // Here you can add the documentation
      info: `
        # Button
        Renders a button with the main background color. 
      `  
    }
  );
  ```  

* **Describe your stories properly**
  
  Keep in mind that someone else will read this documentation, so they need to understand every visual state that you are showing.


* **Add at least one story with [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)**
  
  Knobs is a Storybook Addon that allows you to edit props dynamically using the Storybook UI. 
  You can also use Knobs as a dynamic variable inside stories in Storybook.
  
  It is useful for showing the different states of a component.
  
  ```javascript
  import {select, text, withKnobs} from "@storybook/addon-knobs";
  
  // add the Knobs decorator
  stories.addDecorator(withKnobs);
  
  // use the Knobs for React props 
  stories.add(
    'Buttons', 
    () => <Button 
            label={text('Button label', 'Default label')}
            type={select('Button type', ['main', 'secondary'], 'main')} />,
    //...
  );
  ```
  
  Every `prop` defined with Knob adds a form input under the Knob tab in the Storybook UI. 
  The user can change the input values and immediately see the results.

## Exporting a new component

After creating a new component you need to export it on the `src/index.tsx` file. 
Only components exported by this file will be available in the distributable build of this project.
