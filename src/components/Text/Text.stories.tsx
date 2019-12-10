import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './';
import {
  boolean,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

const stories = storiesOf('Components|Text', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => (
    <Text
      type={select(
        'Text type',
        [
          'body-content-big',
          'body-content',
          'body-content',
          'caption',
          'heading',
          'label-button',
          'label-cta',
          'label-link',
          'title',
        ],
        'title',
      )}
      headingSize={select('Heading size', [1, 2, 3, 4, 5], 1)}
      maxLength={number('Max length', null)}
      value={text('Content', 'Ea qui proident velit cupidatat ut')}
      isBold={boolean('Bold', false)}
      isSmall={boolean('Small', false)}
    />
  ),
  {
    order: 1,
    info: `
    The \`Text\` component allows you to add different text pieces in your application.  You can add the following text formats:

    Heading
    Body Content
    Labels

    The available options are:
    \`heading\`
    \`title\`
    \`body-content-big\`
    \`body-content\`
    \`caption\`
    \`label-cta\`
    \`label-button\`
    \`label-link\`
    
    There are specific settings for some of the options.  

    \`headingSize\`: specifies the size of the heading.  It's only available for the \`heading\` type.
    \`isBold\`: sets the text to \`bold\`.  It's only available for \`body-content\` and \`caption\`.
    \`isSmall\`: sets the text to a smaller font size.  It's only available for \`button-label\`. 
    
    The default type for the Text component is \`body-content\`, and the default \`heading\` size is 1.
    
    Usage instructions:
    
        import { Text } from '@codelitt/ay-design-library';
    
        <Text
          type='title' 
          value="My Text" 
          maxLength={100}
          isBold={false}
          isSmall={false}
        />
    `,
  },
);

stories.add(
  'Title',
  () => <Text type="title" value="Ea qui proident velit cupidatat ut" />,
  {
    order: 2,
  },
);

stories.add(
  'Big Body',
  () => (
    <Text type="body-content-big" value="Ea qui proident velit cupidatat ut" />
  ),
  {
    order: 3,
  },
);

stories.add(
  'Bold Body',
  () => (
    <Text
      type="body-content"
      isBold={true}
      value="Ea qui proident velit cupidatat ut"
    />
  ),
  {
    order: 4,
  },
);

stories.add(
  'Body content',
  () => <Text type="body-content" value="Ea qui proident velit cupidatat ut" />,
  {
    order: 5,
  },
);

stories.add(
  'Caption',
  () => <Text type="caption" value="Ea qui proident velit cupidatat ut" />,
  {
    order: 6,
  },
);

stories.add(
  'Caption Bold',
  () => (
    <Text
      type="caption"
      isBold={true}
      value="Ea qui proident velit cupidatat ut"
    />
  ),
  {
    order: 7,
  },
);

stories.add('CTA Label', () => <Text type="label-cta" value="CTA Label" />, {
  order: 8,
});

stories.add(
  'Button Label',
  () => <Text type="label-button" value="Button Label" />,
  {
    order: 9,
  },
);

stories.add(
  'Small Button Label',
  () => <Text type="label-button" isSmall={true} value="Small Button Label" />,
  {
    order: 10,
  },
);

stories.add('Link Label', () => <Text type="label-link" value="Link Label" />, {
  order: 11,
});

stories.add(
  'Heading',
  () => (
    <div>
      <div style={{ padding: '10px 0' }}>
        <Text type="heading" value="Heading 1" />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Text type="heading" value="Heading 2" headingSize={2} />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Text type="heading" value="Heading 3" headingSize={3} />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Text type="heading" value="Heading 4" headingSize={4} />
      </div>

      <div style={{ padding: '10px 0' }}>
        <Text type="heading" value="Heading 5" headingSize={5} />
      </div>
    </div>
  ),
  {
    order: 12,
  },
);

stories.add(
  'Max length',
  () => (
    <Text
      type="body-content"
      maxLength={10}
      value="Ea qui proident velit cupidatat ut"
    />
  ),
  {
    order: 13,
  },
);
