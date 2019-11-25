import React from "react";
import {configure} from '@storybook/react';
import {addParameters} from '@storybook/react';
import {addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../node_modules/@codelitt/ay-css-library/dist/main.min.css';
import ayTheme from './ayTheme';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  backgrounds: [
    { name: 'white', value: '#ffffff' },
    { name: 'dark', value: '#131416' },
  ],
  options: {
    theme: ayTheme,
    storySort: (a, b) => {
      const aOrder = a[1].parameters.order;
      const bOrder = b[1].parameters.order;

      if (aOrder !== undefined && bOrder !== undefined) {
        return (aOrder + '').localeCompare((bOrder + ''))
      } else {
        return a[1].id.localeCompare(b[1].id)
      }
    }
  },
});

addDecorator(
  withInfo({
    inline: false,
    header: true
  })
);

configure(require.context('../src', true, /\.(stories)\.tsx$/), module);

