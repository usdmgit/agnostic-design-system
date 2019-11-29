import * as React from 'react';
import SidebarMenu from './';
import { storiesOf } from '@storybook/react';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
};

const stories = storiesOf('Components|Sidebar', module);

stories.add('SidebarMenu', () => <SidebarMenu items={[]} />, {
  order: 2,
});
