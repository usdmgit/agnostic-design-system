import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './';
import { action } from '@storybook/addon-actions';
import { number, select, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Text', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => (
    <Text
      type={select('Text type', ['body-content', 'title', 'heading'], 'title')}
      headingSize={select('Heading size', [1, 2, 3, 4, 5], 1)}
      maxLength={number('Max length', null)}
      value={text('Content', 'Ea qui proident velit cupidatat ut')}
    />
  ),
  {
    order: 1,
    info: `
Usage instructions:

    import { Text } from '@codelitt/ay-design-library';

    <Text type='title' value="My Text" maxLength={100} />
    `,
  },
);

stories.add('Heading', () => <Text type="heading" value="Heading 1" />, {
  order: 4,
});

stories.add(
  'Title',
  () => <Text type="title" value="Ea qui proident velit cupidatat ut" />,
  {
    order: 2,
  },
);

stories.add(
  'Body content',
  () => <Text type="body-content" value="Ea qui proident velit cupidatat ut" />,
  {
    order: 3,
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
    order: 4,
  },
);
