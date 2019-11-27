import * as React from 'react';
import SidebarMenu from './';
import { storiesOf } from '@storybook/react';
import SidebarItem from '../SidebarItem';
import AgencyLeasingIcon from '../../../assets/images/agency_leasing_menu.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
};

const stories = storiesOf('Components|Sidebar', module);

stories.add(
  'SidebarMenu',
  () => (
    <SidebarMenu>
      <SidebarItem
        text="Item"
        icon={AgencyLeasingIcon}
        onClick={action('click on item')}
      />
    </SidebarMenu>
  ),
  {
    order: 2,
    info: `
The SidebarMenu is a wrapper for SidebarItems. It provides the navigation structure and adapts the navigation on different screen sizes.

Example of how to use it:

\`\`\`
import { SidebarMenu, SidebarItem } from '@codelitt/ay-design-library';

<SidebarMenu>
  <SidebarItem ... />
  <SidebarItem ... />
  <SidebarItem ... />
</SidebarMenu>
\`\`\`
    `,
  },
);
