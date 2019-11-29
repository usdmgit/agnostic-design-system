import * as React from 'react';
import PageContent from './';
import { storiesOf } from '@storybook/react';
import SidebarMenu from '../SidebarMenu';
import { action } from '@storybook/addon-actions';
import GeneralToolkitIcon from '../../../assets/images/general_toolkit_menu.svg';

export default {
  title: 'PageContent',
  component: PageContent,
};

const stories = storiesOf('Components|Sidebar', module);

stories.add(
  'PageContent',
  () => (
    <PageContent>
      <SidebarMenu items={[
        {
          active: true,
          text: 'Menu item',
          onClick: action('Item click'),
          icon: GeneralToolkitIcon
        },
      ]} />

      Page content goes here
    </PageContent>
  ),
  {
    order: 3,
    info: `
Usage instructions:

\`\`\`
import { PageContent, SidebarMenu } from '@codelitt/ay-design-library';

<PageContent>
  <SidebarMenu items={[]} />
 
   // Page content goes here
   <Container>
     ...
   </Container>
</PageContent>
\`\`\`
    `,
  },
);
