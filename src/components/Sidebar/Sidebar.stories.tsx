import * as React from 'react';
import { SidebarMenu, SidebarItem } from './';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AgencyLeasingIcon from '../../assets/images/agency_leasing_menu.svg';
import GeneralToolkitIcon from '../../assets/images/general_toolkit_menu.svg';
import AvatarExample from '../../assets/images/avatar-placeholder.png';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Sidebar', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => (
    <SidebarMenu>
      <SidebarItem
        active={boolean('First item Active', true)}
        icon={GeneralToolkitIcon}
        text={text('First item text', 'First item')}
        onClick={action('first item click')}
      />

      <SidebarItem
        active={boolean('Second item Active', false)}
        icon={AgencyLeasingIcon}
        text={text('Second item text', 'Second item')}
        onClick={action('second item click')}
      />

      <SidebarItem
        fixedBottom={boolean('Avatar fixed bottom?', true)}
        icon={AvatarExample}
        text={text('User name', 'Debra Henry')}
        onClick={action('avatar click')}
      />
    </SidebarMenu>
  ),
  {
    order: 1,
    info: `
To create a sidebar navigation you need to use two elements: \`SidebarMenu\` and \`SidebarItem\`.    
The \`SidebarMenu\` is a wrapper for SidebarItems. It provides the navigation structure and adapts the navigation on different screen sizes.  
\`SidebarItems\` are clickable elements that lives inside one SidebarMenu. Each item has an icon, a text and must provide an onClick function callback.
    `,
  },
);
