import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './';
import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Card', module);

stories.addDecorator(withKnobs);

stories.add(
  'Live testing',
  () => {
    const cardImage = text('Image', '/news.png');
    const cardTitle = text('Title', 'News');
    const cardDescription = text(
      'Description',
      'Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.',
    );

    const cardShortcuts = [
      {
        label: text('Shortcut 1 label', 'Shortcut 1'),
        onClick: () => action('button clicked'),
      },
      {
        label: text('Shortcut 2 label', 'Shortcut 2'),
        onClick: () => action('button clicked'),
      },
    ];
    const cardButton = {
      label: text('Button Label', 'Button'),
      onClick: () => action('button clicked'),
    };

    return (
      <div>
        <div
          style={{ padding: '10px', display: 'inline-block', width: '22rem' }}
        >
          <p>Card</p>
          <Card
            image={cardImage}
            title={cardTitle}
            description={cardDescription}
            shortcuts={cardShortcuts}
            primaryButton={cardButton}
          />
        </div>
      </div>
    );
  },
  {
    order: 1,
    info: `
The \`Card\` component is composed by a top image, a title, a description, two shortcut buttons, and an action button.

The component's width is 100%, and it adapts to the width of the element that contains it.

The description text can have a maximum of 150 characters on desktop.  For breakpoints defined for mobile devices (<960 px) the maximum will be 70 characters.

When a user hovers over a card on desktop, the card will highlight and “float” above the page.

Usage instructions:

    import { Card } from '@codelitt/ay-design-library';

    <Card
      image='../images/image.jpg'
      title='Card Title'
      description='Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore.'
      shortcuts=[
        {label: 'Shortcut 1 label', onClick: () => { alert('Hi!')},
        {label: 'Shortcut 2 label', onClick: () => { alert('Hi!')}
      ]
      button={label: 'Button label', onClick: () => { alert('Hi!')}
    />
    `,
  },
);

stories.add(
  'Card',
  () => (
    <div>
      <div style={{ padding: '10px 0', width: '22rem' }}>
        <Card
          image="/news.png"
          title="News"
          description="This is the card description text"
          shortcuts={[
            {
              label: 'Shortcut 1 label',
              onClick: () => {
                alert('Hi!');
              },
            },
            {
              label: 'Shortcut 2 label',
              onClick: () => {
                alert('Hi!');
              },
            },
          ]}
          primaryButton={{
            label: 'Open News',
            onClick: () => {
              alert('Hi!');
            },
          }}
        />
      </div>
    </div>
  ),
  {
    order: 2,
  },
);
