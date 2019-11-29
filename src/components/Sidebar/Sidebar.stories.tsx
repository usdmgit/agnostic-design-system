import * as React from 'react';
import { SidebarMenu, SidebarItem } from './';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AgencyLeasingIcon from '../../assets/images/agency_leasing_menu.svg';
import GeneralToolkitIcon from '../../assets/images/general_toolkit_menu.svg';
import AvatarExample from '../../assets/images/avatar-placeholder.png';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import PageContent from './PageContent';

const stories = storiesOf('Components|Sidebar', module);

stories.addDecorator(withKnobs);

const listItems = [
  {
    isActive: boolean('First item active?', false),
    text: text('First item text', 'First menu item'),
    onClick: action('First item click'),
    icon: GeneralToolkitIcon,
  },
  {
    isActive: boolean('Second item active?', true),
    text: text('Second item text', 'Second menu item'),
    onClick: action('Second item click'),
    icon: AgencyLeasingIcon,
  },
  {
    isActive: boolean('Third item active?', false),
    text: text('Third item text', 'Third menu item'),
    onClick: action('Third item click'),
    icon: GeneralToolkitIcon,
  },
  {
    isActive: boolean('Fourth item active?', false),
    text: text('Fourth item text', 'Fourth menu item'),
    onClick: action('Fourth item click'),
    icon: AgencyLeasingIcon,
  },
  {
    isActive: boolean('Avatar Active', false),
    isFixed: true,
    text: text('Avatar text', 'Avatar item'),
    onClick: action('Avatar item click'),
    icon: AvatarExample,
  },
];

stories.add(
  'Live testing',
  () => (
    <PageContent>
      <SidebarMenu items={listItems} />

      <main>Content</main>
    </PageContent>
  ),
  {
    order: 1,
    info: `
To create a sidebar navigation you need to use two elements: \`PageContent\` and \`SidebarMenu\`.

The \`PageContent\` is a wrapper that deals with the SidebarMenu width and height. Depending on the screen size, it will
adapt the content to not overlap the sidebar menu.

The \`SidebarMenu\` is where you'll render your menu links. Each link must have an icon, a text and an onClick function.
Also, the sidebar menu needs one active item to work on mobile devices. The SidebarMenu has 4 different responsive breakpoints:  

1. For Desktops it is fixed at the left side of the page and shows a list with the items, showing their icon and text.  
2. For Tablets it is still fixed at the left, but it shows only the icons of each item.  
3. For Phones the SidebarMenu goes to the top of the page. The active item and the fixed item are the only visible items in the menu.  
When you click or touch the active item, it will open the menu and show all the remaining items.

Usage instructions:

\`\`\`
import { PageContent, SidebarMenu } from '@codelitt/ay-design-library';

<PageContent>
  <SidebarMenu items={[
    {
      isActive: true,
      text: 'Dashboard',
      onClick: () => redirectTo('/dashboard'),
      icon: DashboardIconSvg
    },
    {
      text: 'Login',
      onClick: () => redirectTo('/login'),
      icon: LoginIconSvg
    },
    {
      text: 'Jhon Doe',
      onClick: () => redirectTo('/profile'),
      icon: UserAvatarImg,
      isFixed: true
    }
   ]}/>

  Your page content goes here
</PageContent>
\`\`\`
    `,
  },
);
