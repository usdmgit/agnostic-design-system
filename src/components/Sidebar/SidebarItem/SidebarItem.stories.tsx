import * as React from 'react';
import SidebarItem from './';
import { storiesOf } from '@storybook/react';
import SidebarMenu from '../SidebarMenu';
import AgencyLeasingIcon from '../../../assets/images/agency_leasing_menu.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SidebarItem',
  component: SidebarItem,
};

const stories = storiesOf('Components|Sidebar', module);

stories.add(
  'SidebarItem',
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
    order: 3,
    info: `
Example of how to use it:

\`\`\`
import { SidebarMenu, SidebarItem } from '@codelitt/ay-design-library';

<SidebarMenu>
  <SidebarItem
    text="First item"
    icon={MyMenuIcon}
    onClick={() => redirectTo('/first-item')} />

  <SidebarItem
    text="Second item"
    icon={MySecondIcon}
    onClick={() => redirectTo('/second-item')} />
</SidebarMenu>
\`\`\`
    `,
  },
);
